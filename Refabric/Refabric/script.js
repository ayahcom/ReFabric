

let cosmetics = [
    {
        name: "Mega Lipgloss",
        link: "https://www.tiktok.com/t/ZTjgwPHNy/",
        category: "Makeup",
        subCategory: "Lipgloss",
        dificulty: "easy",
        description: "Combine your old lipglosses to create a new one while also using your old elf halo glow container",
    },
    {
        name: "Revamping lipstick",
        link: "https://example.com/lipstick",
        category: "Makeup",
        subCategory: "Lipstick",
        dificulty: "easy",
        description: "-----",
    },
    {
        name: "Your Perfect Lipstick",
        link: "https://youtu.be/w21xlMj0taU?si=r9hGwrVTyGuiJNoV",
        category: "Makeup",
        subCategory: "Lipstick",
        dificulty: "meduim",
        description: "Create your perfect lipstick shade by mixing different lipsticks together.",
    },
    {
        name: "Your Personalized Scent",
        link: "https://example.com/lipstick",
        category: "Makeup",
        subCategory: "Makeup compact",
        dificulty: "hard",
        description: "Reuse your old makeup compact by mixing beezwax and essential oils to create your perfect scent.",
    },
]

let miscellaneous = [{
    name: "Milk Carton Cup holder",
    link: "https://www.tiktok.com/@beanshotcoffee/video/7429454031820557600",
    category: "Recyling",
    subCategory: "Milk Carton",
    dificulty: "Medium",
    description: "Waste not, want not! Use your old milk cartons to create a cup holder to help carry your drinks.",
}]

let clothing = [
    {
        name: "Old T-shirt Tote Bag",
        link: "https://www.sandiego.gov/sites/default/files/make_a_diy_t-shirt_tote_bag.pdf",
        category: "shirt",
        subCategory: "Tote bag",
        dificulty: "hard",
        description: "Transform your old t-shirts into a stylish tote bag. Perfect for carrying groceries or books!",

    },
    {
        name: "T-shirt Plant Hanger",
        link: "https://madamsew.com/blogs/sewing-blog/make-plant-hanger-from-tshirt",
        category: "shirt",
        subCategory: "Plant Hanger",
        dificulty: "Hard",
        description: "Become eco-friendly by using old t-shirts to make a plant hanger while also growning your own plants.",

    },
    {
        name: "T-shirt Pillow",
        link: "https://www.instructables.com/Up-Cycle-an-old-t-shirt-into-a-pillow/",
        category: "shirt",
        subCategory: "Pillow",
        dificulty: "hard",
        description: "Make a comfy throw pillow from your old t-shirts. A great way to repurpose and add a personal touch to your home decor.",
    },
]

let dishware = [
    {name: "Fine China Mosaic",
    link: "https://overthebigmoon.com/from-oops-to-ahhh/",
    category: "Ceramics",
    subCategory: "Fine China",
    dificulty: "very dificult",
    description: "Create a beautiful mosaic using broken pieces of fine china. A unique way to add art to your home decor.",
},
    {name: "Teacup Candle",
    link: "https://www.marthastewart.com/7690300/how-get-wax-out-of-candle-jar",
    category: "Ceramics",
    subCategory: "Teacup",
    dificulty: "easy",
    description: "Transform an old teacup into a charming candle. Perfect for adding a touch of elegance to your home.",
},
  {  name: "Fine china Bird Feeder",
    link: "https://colormethrifty.com/hanging-teacup-bird-feeder/",
    category: "Ceramics",
    subCategory: "Bird Feeder",
    dificulty: "easy",
    description: "Create a beautiful bird feeder using plates and teacups. A unique way to attract birds to your garden and add decoration.",
}]

let furniture = {}

const searchItems = (searchTerm) => {
    const normalizeTerm = searchTerm.toLowerCase().replace(/\s+/g, "");
    return cosmetics.filter(item => 
        item.name.toLowerCase().replace(/\s+/g, "").includes(normalizeTerm) ||
        item.subCategory.toLowerCase().replace(/\s+/g, "").includes(normalizeTerm) ||
        item.category.toLowerCase().replace(/\s+/g, "").includes(normalizeTerm)
    );
}

searchItems("scent").forEach(item => {
    console.log(
        "Category: " + item.category +
        ", SubCategory: " + item.subCategory +
        ", Name: " + item.name
    );
});

console.log("Script is running");

// let search = ""
// let matches = ["test"]

// function test(){
//     let word = document.querySelector("#searchWord").value;
//         document.querySelector("#output").innerHTML = word;
// }

// function findMatchesinCosmetics(){
//     let word = document.querySelector("#searchWord").value;
//     let matches = ["Test"]
//     let output = ""
//     word = word.toLowerCase();
//     for(let c=0; c<cosmetics.length; c++){
//       if(cosmetics[c].name.toLowerCase() == word ||
//           cosmetics[c].subCategory == word ||
//           cosmetics[c].category == word
//           ){
//               //matches.append(cosmetics[c]);
//               output = output + "<p>" + cosmetics[c].name + "<br>" +
//               cosmetics[c].subCategory  +"<br>" +
//               cosmetics[c].category + "</p>";
//           }        
//     }
//     document.querySelector("#output").innerHTML = output;
// }

// const obj = JSON.parse(text);

// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;

//in html for displaying results do a ul tag and then 
// inside use jinja for "for element in output" and then make 
// it do an li so for each things in matches it adds it to 
// the list as li and then style it or whatever yadayadayada