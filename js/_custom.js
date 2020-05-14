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
  const typeDials = document.querySelector('.type-dials');
  const typeObjects = document.querySelector('.type-objects');
  const typeAreas  = document.querySelector('.type-areas');
if(typeDials && typeObjects && typeAreas){
  typeDials.children[0].addEventListener('click', () => typeDials.classList.toggle('type-dials-opend'))
  typeObjects.children[0].addEventListener('click', () => typeObjects.classList.toggle('type-objects-opend'))
  typeAreas.children[0].addEventListener('click', () => typeAreas.classList.toggle('type-areas-opend'))
   
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
  
})();
