function result(){
    let text = document.getElementById('txt').value; 
    let result = document.getElementById('result');
    let image = document.getElementById('img');
    let imageSwitcher = image.getElementsByTagName('img')[0];


    const data = [
        "https://static.vecteezy.com/system/resources/previews/010/147/359/non_2x/hand-draw-heart-icon-love-sign-design-free-png.png",
        "https://cdn.pixabay.com/photo/2014/04/02/10/38/ball-304101_1280.png",
        "https://cdn.pixabay.com/photo/2022/09/24/19/47/dog-7477112_1280.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHwv76yk-Pfi8MT1Ju-ajKfT4iEBspuVO7yOFKUpyhvw_wL7W4hnkdqc4WpQDaR_J28I&usqp=CAU",
        "https://cdn.pixabay.com/photo/2021/05/01/09/13/elephant-6220631_1280.png",
        "https://static.vecteezy.com/system/resources/previews/001/188/566/non_2x/fire-png.png",
        "https://img.lovepik.com/58pic/33/48/28/61G58PIC0fzw5T9JfCeej_PIC2018.png",
        "https://png.pngtree.com/png-clipart/20231120/original/pngtree-granny-fiddling-with-seedlings-in-pots-before-planting-in-a-vegetable-png-image_13668753.png",
        "https://img.freepik.com/icones-gratis/igreja_318-491543.jpg?w=2000",
        "https://cdn.pixabay.com/photo/2013/07/12/14/06/carafe-147736_1280.png",
        "https://images.freeimages.com/vme/images/4/2/420507/kiwi_preview",
        "https://cdn.pixabay.com/photo/2023/01/25/21/10/lion-7744604_1280.png",
        "https://static.vecteezy.com/system/resources/previews/011/618/010/non_2x/apple-cartoon-illustration-free-png.png",
        "https://static.vecteezy.com/system/resources/previews/001/202/079/non_2x/fishing-ship-png.png",
        "https://cdn.pixabay.com/photo/2020/05/15/07/35/eyes-5172653_1280.png",
        "https://static.vecteezy.com/system/resources/previews/019/045/642/non_2x/duck-graphic-clipart-design-free-png.png",
        "https://static.vecteezy.com/system/resources/previews/019/607/561/non_2x/cheese-graphic-clipart-design-free-png.png",
        "https://img.freepik.com/icones-gratis/rato_318-492223.jpg?w=2000",
        "https://static.vecteezy.com/system/resources/previews/013/443/172/non_2x/orange-juice-illustration-with-glass-and-orange-slice-free-png.png",
        "https://cdn.pixabay.com/photo/2021/10/12/05/49/armadillo-6702432_1280.png",
        "https://static.vecteezy.com/system/resources/previews/019/606/501/non_2x/grape-graphic-clipart-design-free-png.png",
        "https://static.vecteezy.com/system/resources/previews/013/211/278/non_2x/cartoon-of-cow-illustration-cow-in-format-image-illustration-of-cow-free-png.png",
        "https://img.freepik.com/icones-gratis/wi-fi_318-169401.jpg?w=2000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSKES3YvMS6gYgDWAH0Rd7LLHSRU7fglDjqz2_wCar3GFW4ST12z_VRTTls1entNkcL4&usqp=CAU",
        "https://static.vecteezy.com/system/resources/previews/013/261/186/non_2x/girl-doing-yoga-and-meditating-yoga-love-freedom-happiness-health-free-png.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE79xqWIInivVCgOg_eIB0n4YZGxL1VDSwLQ&usqp=CAU"
    ];

    switch(text){
        case "A":
            result.innerHTML = "A de <span>Amor</span>";
            imageSwitcher.src = data[0];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "B":
            result.innerHTML = "B de <span>Bola</span>";
            imageSwitcher.src = data[1];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "C":
            result.innerHTML = "C de <span>Cachorro</span>";
            imageSwitcher.src = data[2];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "D":
            result.innerHTML = "D de <span>Dado</span>";
            imageSwitcher.src = data[3];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "E":
            result.innerHTML = "E de <span>Elefante</span>";
            imageSwitcher.src = data[4];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "F":
            result.innerHTML = "F de <span>Fogo</span>";
            imageSwitcher.src = data[5];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "G":
            result.innerHTML = "G de <span>Girafa</span>";
            imageSwitcher.src = data[6];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "H":
            result.innerHTML = "H de <span>Horta</span>";
            imageSwitcher.src = data[7];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "I":
            result.innerHTML = "I de <span>Igreja</span>";
            imageSwitcher.src = data[8];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "J":
            result.innerHTML = "J de <span>Jarra</span>";
            imageSwitcher.src = data[9];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "K":
            result.innerHTML = "K de <span>Kiwi</span>";
            imageSwitcher.src = data[10];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "L":
            result.innerHTML = "L de <span>Leão</span>";
            imageSwitcher.src = data[11];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "M":
            result.innerHTML = "M de <span>Maça</span>";
            imageSwitcher.src = data[12];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "N":
            result.innerHTML = "N de <span>Navio</span>";
            imageSwitcher.src = data[13];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "O":
            result.innerHTML = "O de <span>Olho</span>";
            imageSwitcher.src = data[14];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "P":
            result.innerHTML = "P de <span>Pato</span>";
            imageSwitcher.src = data[15];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Q":
            result.innerHTML = "Q de <span>Queijo</span>";
            imageSwitcher.src = data[16];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "R":
            result.innerHTML = "R de <span>Rato</span>";
            imageSwitcher.src = data[17];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "S":
            result.innerHTML = "S de <span>Suco</span>";
            imageSwitcher.src = data[18];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "T":
            result.innerHTML = "T de <span>Tatu</span>";
            imageSwitcher.src = data[19];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "U":
            result.innerHTML = "U de <span>Uva</span>";
            imageSwitcher.src = data[20];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "V":
            result.innerHTML = "V de <span>Vaca</span>";
            imageSwitcher.src = data[21];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "W":
            result.innerHTML = "W de <span>Wi-fi</span> (Internet)";
            imageSwitcher.src = data[22];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "X":
            result.innerHTML = "X de <span>Xícara</span>";
            imageSwitcher.src = data[23];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Y":
            result.innerHTML = "Y de <span>Yoga</span>";
            imageSwitcher.src = data[24];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Z":
            result.innerHTML = "Z de <span>Zebra</span>";
            imageSwitcher.src = data[25];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
    }
}