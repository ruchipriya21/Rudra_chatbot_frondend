document.addEventListener('DOMContentLoaded', function() {
   
    const menuItems = [
        { name: 'Pav Bhaji', price: '$5', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhdiUyMGJoYWppfGVufDB8fDB8fHww' },
        { name: 'Chole Bhature', price: '$6', image: 'https://media.istockphoto.com/id/533437740/photo/spicy-chick-peas-chola-masala-chana-masala-puri.jpg?s=612x612&w=0&k=20&c=q8KjepTXFqajMdFaw5xQwDf6lOcMHVYZrOvc0dkUutU=' },
        { name: 'Pizza', price: '$8', image: 'https://media.istockphoto.com/id/144962964/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=hfF176v9N9-rbWJ8VxSMpT1nPN-o2f461T9ECm5VlXI=' },
        { name: 'Mango Lassi', price: '$3', image: 'https://media.istockphoto.com/id/1318635746/photo/indian-mango-or-turmeric-lassi-on-black-background.jpg?s=612x612&w=0&k=20&c=A6H-Sm6V-DwjFNa3NENQjWdeuT-0UmTXO3EnY_2JjC4=' },
        { name: 'Masala Dosa', price: '$7', image: 'https://media.istockphoto.com/id/1365061973/photo/traditional-south-indian-food-masala-dosa-sambar-and-coconut-chutney-served-on-clay-plate-and.jpg?s=612x612&w=0&k=20&c=sUHuGc0dbggHp1s8XwJujTxibXQDxiRewUn8zeoTXy4=' },
        { name: 'Biryani', price: '$10', image: 'https://media.istockphoto.com/id/534334870/photo/egg-biryani-or-anda-biryani-using-basmati-rice-and-spices.jpg?s=612x612&w=0&k=20&c=hkqGYJNjMnaRKIfrd8od4rx9J5Rskmoex_Clfpda4TM=' },
        { name: 'Vada Pav', price: '$2', image: 'https://media.istockphoto.com/id/1420054891/photo/vada-pav-or-wada-pao-is-a-vegetarian-fast-food-dish-native-to-the-state-of-maharashtra-famous.jpg?s=612x612&w=0&k=20&c=PdPlYeVWXJbwLLfl4sFDvKxm3KFKBfEKKlV7q85ERYQ=' },
        { name: 'Rava Dosa', price: '$7', image: 'https://t4.ftcdn.net/jpg/08/46/61/95/240_F_846619567_h8IZYfVI9gF7AR34g7AZ2kB1eSDc6RKG.jpg' },
        { name: 'Samosa', price: '$1', image: 'https://media.istockphoto.com/id/1211909320/photo/samosa.jpg?s=612x612&w=0&k=20&c=MxfA5j5Nj2Vzm8F6_Y_taR2YQXqHH6t2b6SHsH1aiIA=' },
    ];

    const menuContainer = document.getElementById('menu-items');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        menuContainer.appendChild(menuItem);
    });

   
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotFrame = document.getElementById('chatbot-frame');

    chatbotBtn.addEventListener('click', () => {
        chatbotFrame.style.display = chatbotFrame.style.display === 'none' ? 'block' : 'none';
    });
});






