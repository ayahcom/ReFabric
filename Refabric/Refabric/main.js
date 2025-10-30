const cosmetics = [
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
    }
];

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


