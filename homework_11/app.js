var rootNode = document.getElementById("root");
function toggle(click) {
    var icon = this.children[0].innerHTML;
    this.children[0].innerHTML = icon == 'folder_open' ? 'folder' : 'folder_open';
    var folderShow = this.nextElementSibling.style.display;
    this.nextElementSibling.style.display = folderShow == 'block' ? 'none' : 'block';
}
function CreateTree(structure, root) {
    structure.forEach(function (el) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        var icon = document.createElement('i');
        icon.className = 'material-icons';
        icon.innerHTML = !el.folder ? 'insert_drive_file' : 'folder';
        h4.className = el.folder ? 'folder' : '';
        el.folder ? h4.addEventListener('click', toggle) : null;
        var span = document.createElement('span');
        span.innerHTML = el.title;
        h4.appendChild(icon);
        h4.appendChild(span);
        li.appendChild(h4);
        root.appendChild(li);
        if (!el.children && el.folder) {
            var ul = document.createElement('ul');
            var empty = document.createElement('li');
            var h4Empty = document.createElement('h4');
            h4Empty.style.fontStyle = 'italic';
            h4Empty.innerHTML = 'Folder is epmty';
            empty.appendChild(h4Empty);
            ul.appendChild(empty);
            ul.style.display = 'none';
            li.appendChild(ul);
        }
        if(el.children){
            let ulInner = document.createElement('ul');
            ulInner.style.display = 'none';
            li.appendChild(ulInner);
            CreateTree(el.children, ulInner);
        }
    });
}
var TreeView = document.createElement('div');
var treeUl = document.createElement('ul');
CreateTree(structure, treeUl);
TreeView.appendChild(treeUl);
rootNode.appendChild(TreeView);