let header = document.getElementById('header')
header.classList.add('header')

let head = document.createElement('div')
head.classList.add('div__head')

let divLogo = document.createElement('div')
divLogo.classList.add('div__logo')

let logo = document.createElement('img')
logo.classList.add('logo')
logo.src = './images/logo.svg'

let menu = document.createElement('ul') 
menu.classList.add('menu')
menu.innerHTML=`
<a href="#skills"><li class = 'link'>Skills</li></a>
<a href="#portfolio"><li class = 'link'>Portfolio</li></a>
<a href="#video"><li class = 'link'>Video</li></a>
<a href="#price"><li class = 'link'>Price</li></a>
<a href="#contact"><li class = 'link'>Contacts</li></a>
<a href="#en"><li class = 'link__len'>en</li></a>
<li class = 'link__len'>/</li>
<a href="ru"><li class = 'link__len'>ru</li><a/>
`

let bio = document.createElement('div')
bio.classList.add('bio')

let name = document.createElement('h1')
name.classList.add('name')
name.textContent = 'Alexa Rise'

let info = document.createElement('p')
info.classList.add('info')
info.textContent = 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise'

let btn1 = document.createElement('button')
btn1.classList.add('btn1')
btn1.textContent = 'Hire me'

header.style.cssText = `
background-image: url('./images/bg.jpg');
width: 100%;
height: 900px;
`

header.append(head)
head.append(divLogo, bio)
divLogo.append(logo, menu)
bio.append(name, info, btn1)











let section1 = document.getElementById('skills')
section1.classList.add('section')

let section1Name = document.createElement('h2')
section1Name.classList.add('title')
section1Name.textContent = 'Skills'

let skills = document.createElement('div')
skills.classList.add('skills')

let info1 = document.createElement('div')
info1.classList.add('info')

let image1 = document.createElement('img')
image1.classList.add('image1')
image1.src = './images/camera1.svg'

let h31 = document.createElement('h3')
h31.classList.add('h31')
h31.textContent = 'Digital photography'

let p1 = document.createElement('p')
p1.classList.add('p1')
p1.textContent = 'High-quality photos in the studio and on the nature'

let info2 = document.createElement('div')
info2.classList.add('info')

let image2 = document.createElement('img')
image2.classList.add('image2')
image2.src = './images/video1.svg'

let h32 = document.createElement('h3')
h32.classList.add('h31')
h32.textContent = 'Video shooting'

let p2 = document.createElement('p')
p2.classList.add('p1')
p2.textContent = 'Capture your moments so that they always stay with you'

let info3 = document.createElement('div')
info3.classList.add('info')

let image3 = document.createElement('img')
image3.classList.add('image3')
image3.src = './images/image1.svg'

let h33 = document.createElement('h3')
h33.classList.add('h31')
h33.textContent = 'Retouch'

let p3 = document.createElement('p')
p3.classList.add('p1')
p3.textContent = 'I strive to make photography surpass reality'

let info4 = document.createElement('div')
info4.classList.add('info')

let image4 = document.createElement('img')
image4.classList.add('image4')
image4.src = './images/mic1.svg'

let h34 = document.createElement('h3')
h34.classList.add('h31')
h34.textContent = 'Audio'

let p4 = document.createElement('p')
p4.classList.add('p1')
p4.textContent = 'Professional sounds recording for video, advertising, portfolio'

section1.append(section1Name, skills)
skills.append(info1, info2, info3, info4)
info1.append(image1, h31, p1)
info2.append(image2, h32, p2)
info3.append(image3, h33, p3)
info4.append(image4, h34, p4)













let portfolio = document.getElementById('portfolio')
portfolio.classList.add('section')

let section2Name = document.createElement('h2')
section2Name.classList.add('title')
section2Name.textContent = 'Portfolio'

let divP1 = document.createElement('div')
divP1.classList.add('divP1')

let btnP1 = document.createElement('button')
btnP1.classList.add('btnP1')
btnP1.textContent = 'Winter'

let btnP2 = document.createElement('button')
btnP2.classList.add('btnP1')
btnP2.textContent = 'Spring'

let btnP3 = document.createElement('button')
btnP3.classList.add('btnP1')
btnP3.textContent = 'Summer'

let btnP4 = document.createElement('button')
btnP4.classList.add('btnP1')
btnP4.textContent = 'Autumn'


let divP2 = document.createElement('div')
divP2.classList.add('divP2')

let imageP1 = document.createElement('img')
imageP1.src = './images/portfolio-img.jpg'

let imageP2 = document.createElement('img')
imageP2.src = './images/portfolio-img1.jpg'

let imageP3 = document.createElement('img')
imageP3.src = './images/portfolio-img2.jpg'

let imageP4 = document.createElement('img')
imageP4.src = './images/portfolio-img3.jpg'

let imageP5 = document.createElement('img')
imageP5.src = './images/portfolio-img4.jpg'

let imageP6 = document.createElement('img')
imageP6.src = './images/portfolio-img5.jpg'

portfolio.append(section2Name, divP1, divP2)
divP1.append(btnP1, btnP2, btnP3, btnP4)
divP2.append(imageP1, imageP2, imageP3, imageP4, imageP5, imageP6)



















let video = document.getElementById('video')
video.classList.add('section')

let section3Name = document.createElement('h2')
section3Name.classList.add('title')
section3Name.textContent = 'Video'

let divVideo = document.createElement('div')
divVideo.classList.add('divVideo')

let videoImage2 = document.createElement('img')
videoImage2.classList.add('videoImage')
videoImage2.src = './images/Play_hover.svg'

divVideo.style.cssText = `
background-image: url('./images/video-player.jpg');
`

video.append(section3Name, divVideo)
divVideo.append(videoImage2)





















let price = document.getElementById('price')
price.classList.add('section')

let section4Name = document.createElement('h2')
section4Name.classList.add('title')
section4Name.textContent = 'Price'

let divPrice = document.createElement('div')
divPrice.classList.add('divPrice')


let price1 = document.createElement('div')
price1.classList.add('price1')

let priceH31 = document.createElement('h3')
priceH31.classList.add('priceH3')
priceH31.textContent = 'Standard'

let priceH41 = document.createElement('h4')
priceH41.classList.add('priceH4')
priceH41.textContent = '500 $'

let priceP1 = document.createElement('p')
priceP1.classList.add('priceP')
priceP1.innerHTML = 'One location<br>120 photos in color<br>12 photos in retouch<br>Readiness 2-3 weeks<br>Make up, visage'

let prcbtn1 = document.createElement('button')
prcbtn1.classList.add('prcbtn')
prcbtn1.textContent = 'Order shooting'


let price2 = document.createElement('div')
price2.classList.add('price1')

let priceH32 = document.createElement('h3')
priceH32.classList.add('priceH3')
priceH32.textContent = 'Premium'

let priceH42 = document.createElement('h4')
priceH42.classList.add('priceH4')
priceH42.textContent = '700 $'

let priceP2 = document.createElement('p')
priceP2.classList.add('priceP')
priceP2.innerHTML = 'One or two locations<br>200 photos in color<br>20 photos in retouch<br>Readiness 1-2 weeks<br>Make up, visage'

let prcbtn2 = document.createElement('button')
prcbtn2.classList.add('prcbtn')
prcbtn2.textContent = 'Order shooting'


let price3 = document.createElement('div')
price3.classList.add('price1')

let priceH33 = document.createElement('h3')
priceH33.classList.add('priceH3')
priceH33.textContent = 'Gold'

let priceH43 = document.createElement('h4')
priceH43.classList.add('priceH4')
priceH43.textContent = '1000 $'

let priceP3 = document.createElement('p')
priceP3.classList.add('priceP')
priceP3.innerHTML = 'Three locations or more<br>300 photos in color<br>50 photos in retouch<br>Readiness 1 week<br>Make up, visage, hairstyle'

let prcbtn3 = document.createElement('button')
prcbtn3.classList.add('prcbtn')
prcbtn3.textContent = 'Order shooting'

price.append(section4Name, divPrice)
divPrice.append(price1, price2, price3)
price1.append(priceH31, priceH41, priceP1, prcbtn1)
price2.append(priceH32, priceH42, priceP2, prcbtn2)
price3.append(priceH33, priceH43, priceP3, prcbtn3)















let contact = document.getElementById('contact')
contact.classList.add('section')

let divCont = document.createElement('div')
divCont.classList.add('divCont')

let contH2 = document.createElement('h2')
contH2.classList.add('contH2')
contH2.innerHTML = 'Contact me'

let mail = document.createElement('input')
mail.classList.add('mail')
mail.placeholder = 'E-mail'


let phone = document.createElement('input')
phone.classList.add('phone')
phone.placeholder = 'Phone'

let message = document.createElement('input')
message.classList.add('message')
message.placeholder = 'Messaga'


let conbtn = document.createElement('button')
conbtn.classList.add('conbtn')
conbtn.innerHTML = 'Send message'

document.body.append(contact)
contact.append(divCont)
divCont.append(contH2, mail, phone, message, conbtn)

divCont.style.cssText = `
background-image: url('./images/contacts.jpg');
`









let footer = document.createElement('footer')
footer.classList.add('footer')

let divF1 = document.createElement('div')
divF1.classList.add('divF1')

let pf1 = document.createElement('p')
pf1.classList.add('pf')
pf1.innerHTML = '©'

let pf2 = document.createElement('p')
pf2.classList.add('pf')
pf2.innerHTML = '2022'

let pf3 = document.createElement('p')
pf3.classList.add('pf')
pf3.innerHTML = 'github'


let divF2 = document.createElement('div')
divF2.classList.add('divF2')

let imgF1 = document.createElement('img')
imgF1.classList.add('imgF')
imgF1.src = './images/inst1.svg'

let imgF2 = document.createElement('img')
imgF2.classList.add('imgF')
imgF2.src = './images/fb1.svg'

let imgF3 = document.createElement('img')
imgF3.classList.add('imgF')
imgF3.src = './images/tw1.svg'

let imgF4 = document.createElement('img')
imgF4.classList.add('imgF')
imgF4.src = './images/pinterest1.svg'

document.body.append(footer)
footer.append(divF1, divF2)
divF1.append(pf1, pf2, pf3)
divF2.append(imgF1, imgF2, imgF3, imgF4)






