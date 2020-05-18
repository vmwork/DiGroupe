(function(){
  // навигация
  const navigation = document.querySelector('.main-nav');
  const searchButton = document.querySelector('.search-button');
  const searchContrainer = document.querySelector('.search-contrainer');
  const searchInput = searchContrainer.querySelector('.search-input')
  const closeModalMenuButtonImg = document.querySelector('.close-search img');
  const searchButtonImg = document.querySelector('.search-button img')

  if(navigation){
    const openModalMenuButton = document.querySelector('.mobile-button');
    const closeModalMenuButton = document.querySelector('.close-search');
   openModalMenuButton.addEventListener('click', openMenu)
   closeModalMenuButton.addEventListener('click', closeMenu)
  }
  function openMenu(){
    navigation.classList.add('nav-modal-position');
    
  }
  function closeMenu(){
    navigation.classList.remove('nav-modal-position');
    searchInput.classList.remove('opend-search-input');
    searchContrainer.style.background = "#ffffff";
    closeModalMenuButtonImg.src = '/img/closebutton3.png';
    searchButtonImg.src = 'img/search3.png';
    
  }
 
  if(searchButton){
    searchButton.addEventListener('click', viewSerarch)
  }
  function viewSerarch(){
    
    searchInput.classList.add('opend-search-input');
    searchContrainer.style.background = "#000000";
    closeModalMenuButtonImg.src = '/img/closebutton.png';
    searchButtonImg.src = 'img/search2.png';
  }
  const menuLists = document.querySelectorAll('.main-menu-item');
  
  if(menuLists){
  
    for (let i = 0; i < menuLists.length; i++){
      menuLists[i].addEventListener('click', openMenuList())
    }
  }
function openMenuList(){
  return function(e){
    
    let menuList = e.target.parentElement.querySelector('.menu-lists');
    if(menuList){
    menuList.classList.toggle('close-menu-item');
  }
    
  }
}

  const buttonShowMainSearch = document.querySelector('.button-search');
  const buttonShowMainSearch2 = document.querySelector('.main-search-button');
  const mainSearch = document.querySelector('.main-header-search');
  const buttonCloseMainSearch = document.querySelector('.main-header-close-search');
  if(buttonShowMainSearch){
    buttonShowMainSearch.addEventListener('click', openMainSearch);
    buttonShowMainSearch2.addEventListener('click', openCloseMainSearch);
    buttonCloseMainSearch.addEventListener('click', closeMainSearch);
  }
  function openMainSearch(){
    mainSearch.classList.remove('modal-hidden');
  }
  function closeMainSearch(){
    mainSearch.classList.add('modal-hidden');
  }
  function openCloseMainSearch(){
    mainSearch.classList.toggle('modal-hidden');
  }
  //  выбор недвижимости
const commercial = document.querySelectorAll('.js-commercial ');
if(commercial){
  for(let i = 0; i < commercial.length; i++){
commercial[i].addEventListener('click', openMenuItem(i))
}

}
function openMenuItem(i){
  return function(e){
   
   
    if( e.target.parentElement.classList.contains('choose-property')){
      checkOpenButtons(e.target.parentElement)
         e.target.parentElement.classList.toggle('js-choose-propert');
        
        chooseOfTypeMobile(e.target.parentElement)
        
        let desctopMenuOpen = e.target.parentElement.parentElement.querySelector('.choose-property2');
        if(desctopMenuOpen){
          
          desctopMenuOpen.classList.toggle('closed-menu-property')
        chooseOfType(desctopMenuOpen, e.target.parentElement)
        }
        
        
        
    } else if(e.target.parentElement.parentElement.classList.contains('choose-property')){
      checkOpenButtons(e.target.parentElement.parentElement)
       e.target.parentElement.parentElement.classList.toggle('js-choose-propert');
      
      chooseOfTypeMobile(e.target.parentElement.parentElement)
      
    }
    
   }
}
// check opend buttons
function checkOpenButtons(el){
  let allOpenButtons = document.querySelectorAll('.choose-property2');
  let allOpendButtonsMobile = document.querySelectorAll('.choose-property');
  // console.log(el)
  for(let i = 0; i < allOpenButtons.length; i++){
    if(el.classList.contains('js-choose-propert')){
      return
    } else {allOpenButtons[i].classList.add('closed-menu-property')}


     

  }
  for(let i = 0; i < allOpendButtonsMobile.length; i++){

    if(el.classList.contains('js-choose-propert')){
      return
    } else if(allOpendButtonsMobile[i].classList.contains('js-choose-propert')){
      allOpendButtonsMobile[i].classList.toggle('js-choose-propert')
    }
   
    
  }
  
  
}
// desctop
function chooseOfType(el, parent){
  
  let choosen = '';
  for(let i = 0; i < el.children.length; i++){
    el.children[i].addEventListener('click', (e) =>{
      choosen = e.target.textContent
      parent.children[0].textContent = choosen
      parent.classList.toggle('js-choose-propert');
      el.classList.add('closed-menu-property')
      
    })
    
  }
} 
// mobile 
function chooseOfTypeMobile(el){
  
  for(let i = 1; i < el.children.length; i++){
    
    el.children[i].addEventListener('click', (e) => {
      el.children[0].textContent = el.children[i].textContent
      
      el.classList.remove('js-choose-propert');
    })
    
  }
}
// вывод табов
let tabToggle = document.querySelectorAll('.tab-toggle');
let tabContainer = document.querySelectorAll('.tabs-cotainer');
if(tabToggle){
  for(let i = 0; i < tabToggle.length; i++){
    tabToggle[i].addEventListener('click', toggleTab(i))
    
  }
}
function toggleTab(i){
  return function(e){
   
     clearColorTabs()
    tabToggle[i].classList.add('color-mod')
      closeAllTabs()
    tabContainer[i].classList.remove('tab-hidden')
    
  }
}
function clearColorTabs(){
  for(let i = 0; i < tabToggle.length; i++){
    tabToggle[i].classList.remove('color-mod')
  }
}
function closeAllTabs(){
  for(let i = 0; i < tabToggle.length; i++){
    tabContainer[i].classList.add('tab-hidden')
  }
}

  // вывод модалки call-back
  const callBackmodal = document.querySelector('.modal-call-back');
  const callBackmodalButtonOpen = document.querySelector('.phone-call-back');
  const callBackmodalButtonClose = document.querySelector('.modal-call-back__close');
  if(callBackmodalButtonOpen){
    callBackmodalButtonOpen.addEventListener('click', openCallBackModal);
    callBackmodalButtonClose.addEventListener('click', closeCallBackModal);
  }
  function openCallBackModal(){
    callBackmodal.classList.remove('modal-hidden');
  }
  function closeCallBackModal(){
    callBackmodal.classList.add('modal-hidden');
  }
  // вывод модалки городов

  const modalChooseCity = document.querySelector('.modal-choose-city');
  const modalChooseCityOpenBatton = document.querySelector('.your-sity-container');
  const modalChooseCityCloseBatton = document.querySelector('.modal-choose-city__close');
  if(modalChooseCityOpenBatton && modalChooseCity){
    
    modalChooseCityOpenBatton.addEventListener('click', openModalChooseCity)
    modalChooseCityCloseBatton.addEventListener('click', closeModalChooseCity)
  }
  function openModalChooseCity(){
    modalChooseCity.classList.remove('modal-hidden');
  }
  function closeModalChooseCity(){
    modalChooseCity.classList.add('modal-hidden');
  }
  // выбор города в модалке
  const cityList = document.querySelectorAll('.chose-item')
  const selectedCity = document.querySelectorAll('.your-sity');
  if(cityList){
    for (let i = 0; i < cityList.length; i++){
      cityList[i].addEventListener('click', selectSity);
    }
  }
  function selectSity(e){
    e.preventDefault();
    selectedCity[0].textContent = e.target.textContent;
    closeModalChooseCity()
  }
  const advansedSearchBlock = document.querySelectorAll('.advansed-block') 
  const advansedSearchButton = document.querySelectorAll('.advansed-search') 
  if(advansedSearchBlock && advansedSearchButton){
    for (let i = 0; i < advansedSearchBlock.length; i++){
      advansedSearchButton[i].addEventListener('click', openAdvansedSearchBlock(i))
    }
  }
 function openAdvansedSearchBlock(i){
   return function(e){
     if(!advansedSearchButton[i].classList.contains('advansed-search-rotate')){
       advansedSearchButton[i].textContent = "Расширенный поиск"
     
     } else {
       advansedSearchButton[i].textContent = "Свернуть"
       
     }
     
    advansedSearchButton[i].classList.toggle('advansed-search-rotate');
    
    advansedSearchBlock[i].classList.toggle('advansed-search-hidden');
     console.log(advansedSearchButton[i])
   }
 }
  
})();
