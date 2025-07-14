document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    const buyButton = document.getElementById('buybutton');
    let catalogVisible = false;
    let catalog = null;

    // Обработчик для кнопки "Каталог"
    actionButton.addEventListener('click', function() {
        if (!catalogVisible) {
            showCatalog();
        } else {
            hideCatalog();
        }
    });

    // Обработчик для кнопки "Buy now"
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            alert('Спасибо за ваш интерес! Наш менеджер свяжется с вами в ближайшее время.');
        });
    }

    // Функция показа каталога
    function showCatalog() {
        if (!catalog) {
            createCatalog();
        }
        catalog.style.display = 'block';
        catalogVisible = true;
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }

    // Функция скрытия каталога
    function hideCatalog() {
        catalog.style.display = 'none';
        catalogVisible = false;
        actionButton.textContent = 'Каталог';
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    }

    // Функция создания каталога
    function createCatalog() {
        catalog = document.createElement('div');
        catalog.id = 'catalog';
        catalog.style.position = 'fixed';
        catalog.style.top = '0';
        catalog.style.left = '0';
        catalog.style.width = '100%';
        catalog.style.height = '90%';
        catalog.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        catalog.style.color = 'white';
        catalog.style.padding = '50px';
        catalog.style.overflowY = 'auto';
        catalog.style.zIndex = '1000';
        catalog.style.display = 'none'; // Сначала скрыт
        
        // Кнопка закрытия
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '× Закрыть';
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.padding = '10px 20px';
        closeBtn.style.fontSize = '20px';
        closeBtn.style.background = '#f1c40f';
        closeBtn.style.color = '#000';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '5px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.addEventListener('click', hideCatalog);
        catalog.appendChild(closeBtn);
        
        // Заголовок каталога
        const title = document.createElement('h2');
        title.textContent = 'Каталог автомобилей Los Santos Customs';
        title.style.textAlign = 'center';
        title.style.marginBottom = '30px';
        title.style.fontSize = '32px';
        title.style.color = '#f1c40f';
        catalog.appendChild(title);
        
        // Контейнер для автомобилей
        const carsContainer = document.createElement('div');
        carsContainer.style.display = 'grid';
        carsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
        carsContainer.style.gap = '30px';
        carsContainer.style.maxWidth = '1200px';
        carsContainer.style.margin = '0 auto';
        
        const cars = [
            {
                name: 'Pegassi Zentorno',
                price: '$725,000',
                image: 'https://i.pinimg.com/736x/ae/1f/e9/ae1fe9130c9f05a3b6fed8a7cbed87c9.jpg',
                description: 'Спортивный суперкар с агрессивным дизайном и выдающейся динамикой.'
            },
            {
                name: 'Truffade Adder',
                price: '$1,000,000',
                image: 'https://www.cheatcc.com/wp-content/uploads/2023/09/5.webp',
                description: 'Элегантный гиперкар с феноменальной максимальной скоростью.'
            },
            {
                name: 'Dewbauchee Vagner',
                price: '$1,535,000',
                image: 'https://i.ytimg.com/vi/vmn9asHDigs/maxresdefault.jpg',
                description: 'Британский суперкар с инновационным аэродинамическим дизайном.'
            },
            {
                name: 'Progen T20',
                price: '$2,200,000',
                image: 'https://i.pinimg.com/originals/4c/41/4b/4c414b3ec4a99d0c58ba23887e67d42c.jpg',
                description: 'Гиперкар с гибридной силовой установкой и активной аэродинамикой.'
            },
            {
                name: 'Grotti Turismo R',
                price: '$500,000',
                image: 'https://avatars.mds.yandex.net/i?id=c16fe31959099c84a12ba54debff5603_l-4469622-images-thumbs&n=13',
                description: 'Итальянский суперкар с идеальным балансом скорости и управляемости.'
            },
            {
                name: 'Overflod Entity XXR',
                price: '$2,450,000',
                image: 'https://static.wikia.nocookie.net/gta/images/9/9a/EntityXXR-GTAO-front.png/revision/latest/scale-to-width-down/1200?cb=20220331235423&path-prefix=ru',
                description: 'Футуристический гиперкар с революционным дизайном.'
            }
        ];
        
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.style.background = '#1a1a1a';
            carCard.style.padding = '20px';
            carCard.style.borderRadius = '10px';
            carCard.style.transition = 'transform 0.3s';
            
            carCard.addEventListener('mouseenter', () => {
                carCard.style.transform = 'scale(1.03)';
            });
            
            carCard.addEventListener('mouseleave', () => {
                carCard.style.transform = 'scale(1)';
            });
            
            const carImage = document.createElement('img');
            carImage.src = car.image;
            carImage.alt = car.name;
            carImage.style.width = '100%';
            carImage.style.borderRadius = '5px';
            carImage.style.marginBottom = '15px';
            carImage.style.height = '200px';
            carImage.style.objectFit = 'cover';
            
            const carName = document.createElement('h3');
            carName.textContent = car.name;
            carName.style.fontSize = '24px';
            carName.style.marginBottom = '10px';
            carName.style.color = '#f1c40f';
            
            const carPrice = document.createElement('p');
            carPrice.textContent = `Цена: ${car.price}`;
            carPrice.style.fontSize = '18px';
            carPrice.style.color = '#ffffff';
            carPrice.style.marginBottom = '10px';
            
            const carDesc = document.createElement('p');
            carDesc.textContent = car.description;
            carDesc.style.marginBottom = '15px';
            carDesc.style.color = '#cccccc';
            
            const buyBtn = document.createElement('button');
            buyBtn.textContent = 'Купить сейчас';
            buyBtn.style.padding = '10px 20px';
            buyBtn.style.background = '#f1c40f';
            buyBtn.style.color = '#000';
            buyBtn.style.border = 'none';
            buyBtn.style.borderRadius = '5px';
            buyBtn.style.cursor = 'pointer';
            buyBtn.style.fontWeight = 'bold';
            buyBtn.style.width = '100%';
            buyBtn.addEventListener('click', function() {
                alert(`Вы выбрали ${car.name} за ${car.price}. Наш менеджер свяжется с вами!`);
            });
            
            carCard.appendChild(carImage);
            carCard.appendChild(carName);
            carCard.appendChild(carPrice);
            carCard.appendChild(carDesc);
            carCard.appendChild(buyBtn);
            
            carsContainer.appendChild(carCard);
        });
        
        catalog.appendChild(carsContainer);
        document.body.appendChild(catalog);
    }
});