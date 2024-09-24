
function getvaluedbyId1(id){
    const num=parseFloat(document.getElementById(id).innerText)
    return num;
    
 }
 function getvaluedbyId2(id){
    const num=parseFloat(document.getElementById(id).value)
    return num;
    
 }
 

 
 
 
 document.getElementById('Button-1').addEventListener('click',function(event){
event.preventDefault();
// const MyBalance1= parseFloat(document.getElementById('My-balance').innerText)
  const MyBalance1=getvaluedbyId1('My-balance')
const AmountOfDonation1= getvaluedbyId2('AmountOfDonation1')
const DonationForNoakhali =getvaluedbyId1('Donation-For-Noakhali')
if(AmountOfDonation1<=0 || AmountOfDonation1>MyBalance1 || isNaN(AmountOfDonation1)){
    document.getElementById('Error-amont1').classList.remove("hidden");
    document.getElementById('my_modal_1').classList.add("hidden")
    return;
 }

const newblance= MyBalance1-AmountOfDonation1
const TotalDonationForNoakhali= DonationForNoakhali+AmountOfDonation1
document.getElementById('Donation-For-Noakhali').innerText=TotalDonationForNoakhali;
document.getElementById('My-balance').innerText=newblance
 
const historyitem=document.createElement('div');
historyitem.innerHTML= `
<p class='text-xl font-semibold text-start'> ${AmountOfDonation1}Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
<p class='text-base font-semibold text-start'>${new Date().toLocaleString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'}) + ` (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}</p>
<div class="divider"></div>

`
const historyconatiner=document.getElementById('Histoty-list')
historyconatiner.insertBefore(historyitem,historyconatiner.firstChild)
})

document.getElementById('Button-2').addEventListener('click',function(event){
    event.preventDefault()
    const MyBalance2=getvaluedbyId1('My-balance')
    const AmountOfDonation2 =getvaluedbyId2('AmountOfDonation2')
    const DonationForfeni=getvaluedbyId1('Donation-For-Feni')
    if(AmountOfDonation2<=0 || AmountOfDonation2>MyBalance2 || isNaN(AmountOfDonation2)){
        document.getElementById('Error-amont2').classList.remove("hidden");
        document.getElementById('my_modal_2').classList.add("hidden")
        return;
     }
    const newblance2= MyBalance2-AmountOfDonation2
    const TotalDonationForFeni= DonationForfeni+AmountOfDonation2
    document.getElementById('Donation-For-Feni').innerText=TotalDonationForFeni;
    document.getElementById('My-balance').innerText=newblance2
    const historyitem=document.createElement('div');
historyitem.innerHTML= `
<p class='text-xl font-semibold text-start'> ${AmountOfDonation2}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p class='text-base font-semibold text-start'>${new Date().toLocaleString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'}) + ` (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}</p>
<div class="divider"></div>
`
const historyconatiner=document.getElementById('Histoty-list')
historyconatiner.insertBefore(historyitem,historyconatiner.firstChild)
})

document.getElementById('Button-3').addEventListener('click',function(event){
    event.preventDefault()
    const MyBalance3=getvaluedbyId1('My-balance')
    const AmountOfDonation3 =getvaluedbyId2('AmountOfDonation3')
    const DonationForStd=getvaluedbyId1('Donation-For-Std')
    if(AmountOfDonation3<=0 || AmountOfDonation3>MyBalance3 || isNaN(AmountOfDonation3)){
        document.getElementById('Error-amont3').classList.remove("hidden");
        document.getElementById('my_modal_3').classList.add("hidden")
        return;
     }
    const newblance3=MyBalance3-AmountOfDonation3
    const TotalDonationForstd=DonationForStd+AmountOfDonation3
    document.getElementById('Donation-For-Std').innerText= TotalDonationForstd;
    document.getElementById('My-balance').innerText=newblance3
    const historyitem=document.createElement('div');
historyitem.innerHTML= `
<p class='text-xl font-semibold text-start'> ${AmountOfDonation3}Taka is Donated for Student-Movement-2024, Bangladesh</p>
<p class='text-base font-semibold text-start'>${new Date().toLocaleString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'}) + ` (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}</p>
<div class="divider"></div>
`
const historyconatiner=document.getElementById('Histoty-list')
historyconatiner.insertBefore(historyitem,historyconatiner.firstChild)
    
    
    
})


const btn2=document.getElementById('Btn-2')
const btn1=document.getElementById('Btn-1')
btn2.addEventListener('click', function(){
    btn2.classList.remove(
        'bg-white',
         'opacity-[.7]',

    )
    btn2.classList.add(
        'bg-[#B4F461]',
        'font-semibold'
    )
btn1.classList.remove( 
    'bg-[#B4F461]',
    'font-semibold')
btn1.classList.add( 
    'bg-white',
         'opacity-[.7]')
   
document.getElementById('Donate-form').classList.add("hidden")
document.getElementById('Histoty-list').classList.remove('hidden')

})
btn1.addEventListener('click',function(){
    btn1.classList.remove(
        'bg-white',
         'opacity-[.7]',

    )
    btn1.classList.add(
        'bg-[#B4F461]',
        'font-semibold'
    )
    btn2.classList.remove( 
        'bg-[#B4F461]',
        'font-semibold')
    btn2.classList.add( 
        'bg-white',
             'opacity-[.7]')
             document.getElementById('Donate-form').classList.remove("hidden")
        document.getElementById('Histoty-list').classList.add('hidden')
           
} )
