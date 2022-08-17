let arr = [{
    name: 'Cassoulet',
    price: '18.75$',
    gram: '417gr',
    discription: 'Meat (typically pork sausages, goose, duck, sometimes mutton), pork skin, white haricot beans'
  },
  {
    name: 'Oeufs en meurette',
    price: '23.10$',
    gram: '347gr',
    discription: 'Poached Eggs + Red Wine + Bacon = Oeufs en Meurette.'
  },
  {
    name: 'Religieuse au chocolat',
    price: '15.60$',
    gram: '312gr',
    discription: 'The nun is a pastry made with choux pastry and pastry cream, usually chocolate or coffee.'
  },
  {
    name: 'Baguette au fromage',
    price: '21$',
    gram: '439gr',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit.'
  },
  {
    name: 'Risotto',
    price: '29.50$',
    gram: '298gr',
    discription: 'Lorem, ipsum dolor sit amet consectetur'
  },
  {
    name: 'Bouillabaisse',
    price: '27.15$',
    gram: '436gr',
    discription: 'Tetur adipisicing elit. Sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit.'
  }
]
let deg = 0;
let sliderPos = 0;
$('#nextDish').click(function() {
    deg+=60;
    $('.plate').css('transform', 'rotate('+deg+'deg)');

        if(sliderPos < 5){
          sliderPos++;
        }else{
          sliderPos = 0;
        }

    $('.text').text(arr[sliderPos].name)
    $('#price').text(arr[sliderPos].price)
    $('#gram').text(arr[sliderPos].gram)
    $('#discription').text(arr[sliderPos].discription)
})
$('#prevDish').click(function() {
    deg-=60;
    $('.plate').css('transform', 'rotate('+deg+'deg)');
       if(sliderPos > 0){
          sliderPos--
        }else{
          sliderPos = 5;
    }
    $('.text').text(arr[sliderPos].name)
    $('#price').text(arr[sliderPos].price)
    $('#gram').text(arr[sliderPos].gram)
    $('#discription').text(arr[sliderPos].discription) 

  })
    