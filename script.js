const leftSelect = document.querySelector('.left-select');
const rightSelect = document.querySelector('.right-select');

let tagGrpList = [
  {grpId:1 ,name:'국가별'  ,checkYn : ""},
  {grpId:2 ,name:'매움'    ,checkYn : ""},
  {grpId:3 ,name:'고기'    ,checkYn : ""},
  {grpId:4 ,name:'밥빵면'  ,checkYn : ""},
  {grpId:5 ,name:'간단하게',checkYn : ""}
];

let tagList = [
  {grpId:1 , tagId:1 , name:"한식"     ,checkYn : ""},
  {grpId:1 , tagId:2 , name:"양식"     ,checkYn : ""},
  {grpId:1 , tagId:3 , name:"일식"     ,checkYn : ""},
  {grpId:1 , tagId:4 , name:"중식"     ,checkYn : ""},
  {grpId:1 , tagId:5 , name:"분식"     ,checkYn : ""},
  {grpId:1 , tagId:6 , name:"중식"     ,checkYn : ""},
  {grpId:2 , tagId:7 , name:"매움"     ,checkYn : ""},
  {grpId:2 , tagId:8 , name:"안매움"   ,checkYn : ""},
  {grpId:3 , tagId:9 , name:"고기"     ,checkYn : ""},
  {grpId:3 , tagId:10 , name:"안고기"   ,checkYn : ""},
  {grpId:4 , tagId:11 , name:"밥"       ,checkYn : ""},
  {grpId:4 , tagId:12 , name:"빵"       ,checkYn : ""},
  {grpId:4 , tagId:13 , name:"면"       ,checkYn : ""},
  {grpId:5 , tagId:14 , name:"간단하게" ,checkYn : ""},
  {grpId:5 , tagId:15 , name:"든든하게" ,checkYn : ""}
];

const setTagList = () => {
  // const prjObj = {
  //   id: userId,
  //   prjId : newPrjId,
  //   prjName : newPrjName
  // };
  
  // projects.push(prjObj);
  
  // tagList.push("한식");
  // tagList.push("양식");
  // console.log(tagList);
  // console.log(tagList.shift());
  // console.log(tagList);
}

const getTagListByGrpId = (grpId) => {
  const list = tagList.filter((t) => (t.checkYn === '' && (t.grpId === grpId)))

  // const list = tagList.filter(function(tag){
  //   return tag.grpId === grpId;
  // });
  
  return list;
}

const setTagName = (grpId) => {
  
  const filterTags = getTagListByGrpId(grpId);
  //console.log(filterTags);
  
  if(filterTags.length >= 2){
    leftSelect.innerHTML  = filterTags[0].name;
    leftSelect.id         = filterTags[0].tagId;
    rightSelect.innerHTML = filterTags[1].name;
    rightSelect.id        = filterTags[1].tagId;
  }
}

const checkedTag = (tagId,checkYn) => {
  let selectGrpId = "";
  const selectTag = tagList.find((t) => { 
      if(t.tagId == tagId){
          t.checkYn   = checkYn; 
          selectGrpId = t.grpId;
      }
  });
  
  const remainTags = tagList.filter((t)=> (t.grpId === selectGrpId && t.checkYn === ''))
  if(remainTags.length === 0){
     tagGrpList.find((g) => {if(g.grpId === selectGrpId) g.checkYn = 'Y' });
   }
   console.log("aa")
}

const nextTagGrp = () => {
  const num = getRandom();
  console.log(num);
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
   
   nextTagGrp();
  // const selectTag = tagList.find((t) => { if(t.tagId == stdTagId) t.checkYn = true; });
  
  //console.log(tagList);
  
}

function init(){
  
  setTagName(2);
  
  //alert(leftMenu);
  //leftMenu.innerHTML  = "";
}

init();



function getRandom() {
  return Math.random();
}