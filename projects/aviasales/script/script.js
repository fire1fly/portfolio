document.addEventListener('DOMContentLoaded', () => {
  // elements from DOM
  const formSearch = document.querySelector('.form-search'),
        inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
        dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
        inputCitiesTo = formSearch.querySelector('.input__cities-to'),
        dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
        inputDateDepart = formSearch.querySelector('.input__date-depart'),
        cheapestTicket = document.getElementById('cheapest-ticket'),
        otherCheapTickets = document.getElementById('other-cheap-tickets');

        
  // data
  let cities = []; 
  const citiesAPI = 'db/cities.json',
        proxy = 'https://cors-anywhere.herokuapp.com/',
        API_KEY = '540c35ab5550d16175ba23e3e58d115c',
        calendar = 'http://min-prices.aviasales.ru/calendar_preload',
        MAX_COUNT_CARD = 10;


  // functions

  const getData = (url, callback, reject = console.error) => { // универсальная функция получения данных через XHR по GET запросу
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) return;
      if (request.status === 200) {
        callback(request.response);
      } else {
        reject(request.status); 
      }
    }); 
    request.send();
  };

  const fillInputOnClick = (event, input, list) => { // заполнение инпута по клику на город из списка
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
      input.value = target.textContent;
      list.textContent = '';
    }
  }
  
  const showCities = (input, list) => { // генерация списка городов под инпутом
    list.innerHTML = '';

    if (input.value === '') return;

    const filterCities = cities.filter((city) => {
      const cityLowerCase = city.name.toLowerCase();
      return cityLowerCase.startsWith(input.value.toLowerCase());
    }); 

    filterCities.forEach((item, index) => {
      if (index < 8) {
        const listItemFilterCities = document.createElement('li');
        listItemFilterCities.classList.add('dropdown__city');
        listItemFilterCities.textContent = item.name;
        list.append(listItemFilterCities);
      }
    });
  };

  const getViewPrice = price => {
    const priceView = price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
    return priceView;
  };

  const getNameCity = code => {
    const objCity = cities.find(city => city.code === code);
    return objCity.name;
  };

  const getDateView = date => {
    return new Date(date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getChanges = number => {
    if (number) {
      return number === 1 ? 'С одной пересадкой' : 'С двумя пересадками'
    } else {
      return 'Без пересадок';
    }
  };

  const getLinkAviasales = data => {
    let link = 'https:/www.aviasales.ru/search/'
    link += data.origin;

    const date = new Date(data.depart_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    link += day < 10 ? '0' + day : day;
    link += month < 10 ? '0' + month : month;
    link += data.destination + '1';           // '1' означает, что летит 1 взрослый 

    return link;
  };

  const createCard = data => {
    const ticket = document.createElement('article');
    ticket.classList.add('ticket');
    
    let deep = '';

    if(data) {
      deep = `<h3 class="agent"> Агент продажи: ${data.gate}</h3>
              <div class="ticket__wrapper">
                <div class="left-side">
                  <a href="${getLinkAviasales(data)}" target="_blank" class="button button__buy">Купить
                    за ${getViewPrice(data.value)}</a>
                </div>
                <div class="right-side">
                  <div class="block-left">
                    <div class="city__from">Вылет из города: 
                      <span class="city__name">${getNameCity(data.origin)}</span>
                    </div>
                    <div class="date"><b>${getDateView(data.depart_date)}</b></div>
                  </div>
              
                  <div class="block-right">
                    <div class="changes">${getChanges(data.number_of_changes)}</div>
                    <div class="city__to">Город назначения:
                      <span class="city__name">${getNameCity(data.destination)}</span>
                    </div>
                  </div>
                </div>
              </div>`;
    } else {
      deep = '<h3>К сожалению, билетов на текущую дату не нашлось.</h3>'
    }

    ticket.insertAdjacentHTML('afterbegin', deep);
    console.log('ticket: ', ticket);
    return ticket;
  };

  const renderCheapDay = (cheapTicket) => {
    cheapestTicket.innerHTML = '<h2>Самый дешевый билет на выбранную дату</h2>';
     const ticket = createCard(cheapTicket[0]);
     cheapestTicket.append(ticket);
  };

  const renderCheapMonth = (cheapTicket) => {
    otherCheapTickets.innerHTML = '<h2>Самые дешевые билеты на другие даты</h2>';
    cheapTicket.sort((ticketA, ticketB) => ticketA.value - ticketB.value);

    for (let i = 0; i < cheapTicket.length && i < MAX_COUNT_CARD; i++) {
      const ticket = createCard(cheapTicket[i]);
      otherCheapTickets.append(ticket);
    }
    console.log(cheapTicket);
  };

  const renderCheap = (data, date) => { // генерация всех карточек билетов
    const cheapTicketMonth = JSON.parse(data).best_prices;
    const cheapTicketDay =  cheapTicketMonth.filter(ticket => {
      return ticket.depart_date === date;
    });
    renderCheapDay(cheapTicketDay);
    renderCheapMonth(cheapTicketMonth);
  };

  // events
  inputCitiesFrom.addEventListener('input', () => {
    showCities(inputCitiesFrom, dropdownCitiesFrom);
  });
  
  inputCitiesTo.addEventListener('input', () => {
    showCities(inputCitiesTo, dropdownCitiesTo);
  });

  dropdownCitiesFrom.addEventListener('click', () => {
    fillInputOnClick(event, inputCitiesFrom, dropdownCitiesFrom);
  });

  dropdownCitiesTo.addEventListener('click', () => {
    fillInputOnClick(event, inputCitiesTo, dropdownCitiesTo);
  });

  formSearch.addEventListener('submit', event => {
    event.preventDefault();
    cheapestTicket.style.display = 'block';
    otherCheapTickets.style.display = 'block';
    const formData = {
      from: cities.find(city => inputCitiesFrom.value === city.name),
      to: cities.find(city => inputCitiesTo.value === city.name),
      when: inputDateDepart.value,
    };

    if (formData.from && formData.to) {
      const requestData = `?depart_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true`;

      getData(proxy + calendar + requestData, response => {
        renderCheap(response, formData.when);
      }, (e) => {
        alert('В этом направлении нет рейсов.')
      });
    } else if (!formData.from){
      alert('Имя города ' + '"' + inputCitiesFrom.value + '"' + ' введено неккоректно.');
    } else if (!formData.to){
      alert('Имя города ' + inputCitiesTo.value + ' введено неккоректно.');
    }
  });

  // calls of functions

  getData(citiesAPI, data => {
    cities = JSON.parse(data).filter(item => item.name);
    cities.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  });

  

  // getData(proxy + 
  //   calendar + 
  //   '?depart_date=2020-05-25&origin=SVX&destination=KGD&one_way=true&token' + 
  //   API_KEY, (data) => {
  //   const cheapTicket = JSON.parse(data).best_prices.filter(item => item.depart_date === '2020-05-25');
  //   console.log(cheapTicket);
  // });

});