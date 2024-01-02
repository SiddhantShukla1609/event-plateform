function showmodal(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.loginform').classList.add('showloginform')

}
function closemodal(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.loginform').classList.remove('showloginform')



}
function institutes (){
const URL ="https://api.thecatapi.com/v1/images/0XYvRd7oD"
const getList = async () => {
    let response = await fetch(URL);
    let data= await response.json();
}
}