// Your code goes here
var rootNode = document.getElementById('root');
window.onhashchange = onChangeHash;
createApp();
function createApp(){
    onChangeHash();
}
function renderMainView(){
    var mainView = document.createElement('div');
    var header = document.createElement('header');
    mainView.appendChild(header);
    header.innerHTML = '<h1 class="logo">Most popular tanks</h1>';
    var tankInfo = document.createElement('div');
    tankInfo.setAttribute('class', 'tanks');
    tanks.forEach(function(element) {
        tankInfo.appendChild(createTankItemForMainView(element)); 
    });
    mainView.appendChild(tankInfo);
    renderComponent(mainView);
}
function createTankItemForMainView(data){
    var tankItem = document.createElement('div');
    tankItem.setAttribute('class', 'tanks_item');
    var tankImg = document.createElement('img');
    tankImg.setAttribute('class', 'tanks_picture');
    var countryImg = document.createElement('img');
    countryImg.setAttribute('class', 'tanks_flag');
    tankItem.appendChild(tankImg);
    tankItem.appendChild(countryImg);
    countryImg.src = 'images/countries/' + data.country + '.png';
    tankImg.src = data.preview;
    countryImg.title = '' + data.country;
    var elLevel = document.createElement('span');
    elLevel.title = data.level;
    elLevel.innerHTML = data.level;
    elLevel.setAttribute('class', 'tank_level');
    var elModel = document.createElement('p');
    elModel.setAttribute('class', 'tank_model')
    elModel.title = data.model;
    elModel.innerHTML = data.model;
    elLevel.appendChild(elModel);
    tankItem.appendChild(elLevel);
    tankItem.onclick = function() { 
        window.location.hash = data.model;
        onChangeHash();
    }
        return tankItem;
}
function renderComponent(comp) {
    if (rootNode.hasChildNodes()) {
        var child = rootNode.childNodes[0];
        rootNode.replaceChild(comp, child);
    }
    else{
        rootNode.appendChild(comp);
    }
}
function renderDetailView(tank){
    var details = tank.details;
    return ` <div class="details">
                <div class="mainInfo">
                    <h1>
                        <img class="flag" src="images/countries/${tank.country}.png" title="${tank.country}"/>${tank.model} (level ${tank.level})
                    </h1>
                    <span class="preview">Preview</span>
                    <img class="detflag" src="${tank.preview}">
                    <span class="back">Back to list view</span>
               </div>
               <div class="tableInfo">
                    <h1 class="preTable">Characteristic</h1>
                        <table>
                            <tr>
                                    <th>
                                        damage
                                    </th>
                                    <th>
                                        ${details.damage}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        breoning
                                    </th>
                                    <th>
                                        ${details.breoning}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        attack speed
                                    </th>
                                    <th>
                                        ${details.attack_speed}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        time of targeting
                                    </th>
                                    <th>
                                        ${details.time_of_targeting}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        ammunition
                                    </th>
                                    <th>
                                        ${details.ammunition}
                                    </th>
                                </tr>
                        </table>
                 </div>
            </div>`
}
function tankInfomation() {
    let model = location.hash.slice(1);
    tanks.forEach(el => {
        if (el.model === model) {
          rootNode.innerHTML = renderDetailView(el);
        }
    });
    const backLink = document.getElementsByClassName('back');
    backLink[0].addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
  }
  function onChangeHash(){
    var isTankExists = false;
    tanks.forEach(function(element) {
        if(location.hash === "#"+element.model){
            renderDetailView(element);
            isTankExists = true;
        }
    })
    if(!isTankExists){
        renderMainView();
    }
}
window.onhashchange = tankInfomation;