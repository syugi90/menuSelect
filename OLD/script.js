const leftSelect = document.querySelector('.left-select');
const rightSelect = document.querySelector('.right-select');
const divTags = document.querySelector('.div-tags');
const divMenus = document.querySelector('.div-menus');


let selectTagList = [];

let tagGrpList = [
  {grpId:1 ,name:'국가별'  ,checkYn : ""},
  {grpId:2 ,name:'매움'    ,checkYn : ""},
  {grpId:3 ,name:'고기'    ,checkYn : ""},
  {grpId:4 ,name:'밥빵면'  ,checkYn : ""},
  {grpId:5 ,name:'간단하게',checkYn : ""}
];

let tagList = [
  {grpId:1 , tagId:1 , name:"한식"     ,selectYn : ""},
  {grpId:1 , tagId:2 , name:"양식"     ,selectYn : ""},
  {grpId:1 , tagId:3 , name:"일식"     ,selectYn : ""},
  {grpId:1 , tagId:4 , name:"중식"     ,selectYn : ""},
  {grpId:1 , tagId:5 , name:"분식"     ,selectYn : ""},
  {grpId:2 , tagId:7 , name:"매운거"     ,selectYn : ""},
  {grpId:2 , tagId:8 , name:"안매운거"   ,selectYn : ""},
  {grpId:3 , tagId:9 , name:"고기"     ,selectYn : ""},
  {grpId:3 , tagId:10 , name:"안고기"   ,selectYn : ""},
  {grpId:4 , tagId:11 , name:"밥"       ,selectYn : ""},
  {grpId:4 , tagId:12 , name:"빵"       ,selectYn : ""},
  {grpId:4 , tagId:13 , name:"면"       ,selectYn : ""},
  {grpId:5 , tagId:14 , name:"간단하게" ,selectYn : ""},
  {grpId:5 , tagId:15 , name:"든든하게" ,selectYn : ""}
];

let menuList = [
  {menuId:1, name:"순두부찌개" , selectYn:""},
  {menuId:2, name:"비빔밥" , selectYn:""},
  {menuId:3, name:"참치야채죽", selectYn:""},
  {menuId:4, name:"김치낙지죽", selectYn:""},
  {menuId:5, name:"도시락", selectYn:""},
  {menuId:6, name:"돈까스", selectYn:""},
  {menuId:7, name:"초밥", selectYn:""},
  {menuId:8, name:"소바", selectYn:""},
  {menuId:9, name:"텐동", selectYn:""},
  {menuId:10, name:"짜장면", selectYn:""},
  {menuId:11, name:"짬뽕", selectYn:""},
  {menuId:12, name:"김밥", selectYn:""},
  {menuId:13, name:"치킨마요", selectYn:""},
  {menuId:14, name:"서브웨이", selectYn:""},
  {menuId:15, name:"우동", selectYn:""},
  {menuId:16, name:"연어샌드위치", selectYn:""},
  {menuId:17, name:"편의점 계란두유", selectYn:""},
  {menuId:18, name:"샐러드", selectYn:""},
  {menuId:19, name:"라면", selectYn:""},
];

let menuTag = [
   {menuId:1, grpId:1, tagId:1},
    {menuId:1, grpId:4 , tagId:11 },
   {menuId:1, grpId:2 , tagId:7},
   {menuId:2, grpId:1, tagId:1},
   {menuId:2, grpId:4 , tagId:11} ,
   {menuId:3, grpId:1, tagId:1},
   {menuId:4, grpId:1, tagId:1},
   {menuId:5, grpId:1,  tagId:1},
   {menuId:5, grpId:4 , tagId:11} ,
   {menuId:6, grpId:1, tagId:2},
   {menuId:6, grpId:3 , tagId:9},
   {menuId:7, grpId:1, tagId:3},
   {menuId:7,grpId:4 , tagId:11},
   {menuId:8, grpId:1, tagId:3},
   {menuId:8,grpId:4 , tagId:13} ,
   {menuId:9, grpId:1, tagId:3},
   {menuId:9,grpId:4 , tagId:11},
   {menuId:10, grpId:1, tagId:4},
   {menuId:10,grpId:4 , tagId:13 },
   {menuId:11, grpId:1, tagId:4},
   {menuId:11, grpId:2 , tagId:7},
   {menuId:11,grpId:4 , tagId:13} ,
   {menuId:12, grpId:1, tagId:5},
   {menuId:13,grpId:1,  tagId:5},
   {menuId:13,grpId:4 , tagId:11},
   {menuId:14, grpId:1, tagId:5},
   {menuId:14, grpId:4 , tagId:12} , 
   {menuId:15, grpId:1, tagId:5},
   {menuId:15, grpId:4 , tagId:13} ,
   {menuId:16, grpId:1, tagId:5},
   {menuId:16, grpId:4 , tagId:12 }, 
   {menuId:19, grpId:1, tagId:5},
   {menuId:19, grpId:4 , tagId:13} ,
];

const setMenuList = () => {
  
  displayMenuList(); //TEST
  
  divTags.classList.add("hidden");
  divMenus.classList.remove("hidden");
  
  const liMenu = document.querySelector('.li-menu');
  
  menuList.forEach((m) => { 
    if (m.selectYn !== 'N') {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = m.name;
      li.appendChild(span);
      liMenu.appendChild(li);
    }
  })

}

const getMenuList = () => {
   tagList.forEach((t) => { 
     if (t.selectYn === 'N'){
        menuTag.forEach((mt)=>{
           if(mt.tagId === t.tagId){
             menuList.find((m)=>{
               if(m.menuId === mt.menuId){
                 m.selectYn = 'N';
               }
             })
           }
        });
    }
  });
  
  //menuList.filter((m)=> (m.selectYn !== 'N'));
  console.log(menuList);
  
  setMenuList();
  
}

const setTagName = (grpId) => {
  const filterTags = tagList.filter((t) => (t.selectYn === '' && (t.grpId === grpId)));

  if(filterTags.length >= 2){
    leftSelect.innerHTML  = filterTags[0].name;
    leftSelect.id         = filterTags[0].tagId;
    rightSelect.innerHTML = filterTags[1].name;
    rightSelect.id        = filterTags[1].tagId;

  }else if(filterTags.length == 1){
    const list = tagList.filter((t) => (t.selectYn === 'Y' && (t.grpId === grpId)))

    leftSelect.innerHTML  = list[0].name;
    leftSelect.id         = list[0].tagId;
    rightSelect.innerHTML = filterTags[0].name;
    rightSelect.id        = filterTags[0].tagId;
  }
}

const checkedTag = (tagId,selectYn) => {
  let selectGrpId = "";
  const selectTag = tagList.find((t) => { 
      if(t.tagId == tagId){
          t.selectYn   = selectYn; 
          selectGrpId = t.grpId;

          if(selectYn === 'Y'){
            selectTagList.push(t);
          }
      }
  });

  const remainTags = tagList.filter((t)=> (t.grpId === selectGrpId && t.selectYn === ''))
  if(remainTags.length === 0){
     tagGrpList.find((g) => {if(g.grpId === selectGrpId) g.checkYn = 'Y' });
   }
}

const setNextTag = () => {
  const list = tagGrpList.filter((t) => (t.checkYn === ''))
  if(list.length > 0){
    const grpId = list[0].grpId;
    setTagName(grpId);
  }else{
    console.log("메뉴를 선택할 차례")
    getMenuList();
  }

}

const handleSelectTag = (e) => {
  
   const selectedTagId = e.querySelector('p').id;
   
   if(selectedTagId === 'both'){
     checkedTag(leftSelect.id,"Y");
     checkedTag(rightSelect.id,"Y");
     
   }else if(selectedTagId == leftSelect.id){
     checkedTag(leftSelect.id,"Y");
     checkedTag(rightSelect.id,"N");
     
   }else{
     checkedTag(leftSelect.id,"N");
     checkedTag(rightSelect.id,"Y");
   }

   displayTegList(); //TEST 
   
   setNextTag();
  // const selectTag = tagList.find((t) => { if(t.tagId == stdTagId) t.checkYn = true; });
  
  //console.log(tagList);
  
}

function init(){
  
  setNextTag();
}

init();




//test 
const displayTegList = () => {
  const selectedTag = document.querySelector('#selected-tag');

  let tagsString = "[선택된 태그] : "; 
  tagList.forEach((t) => { if (t.selectYn === 'Y') tagsString += t.name + " , "})
  selectedTag.innerText = tagsString;
}

const displayMenuList = () => {
  const div = document.querySelector('.tag-select');
  const selectedMenu = document.querySelector('#selected-menu');

  let menusString = "[메뉴 결과] :"; 
  menuList.forEach((m) => { if (m.selectYn !== 'N') menusString += m.name + " , "})
  selectedMenu.innerText = menusString;
}


function getRandom() {
  return Math.random();
}