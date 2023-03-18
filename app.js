// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  //select items
  const user = document.getElementById('user');
  const job = document.getElementById('job');
  const text = document.getElementById('text');
  const avatar = document.getElementById('avatar');

  const prev = document.querySelector('.prev-btn');
  const next = document.querySelector('.next-btn');
  const random = document.querySelector('.random-btn');

  //set initial item
  let currentItem = 0;

  //sset initial person
  window.addEventListener('DOMContentLoaded', function(){
    showPerson();


  });


  const showPerson=()=>{
     const item = reviews[currentItem];
    user.textContent = item.name;
    avatar.src = item.img;
    job.textContent = item.job;
    text.textContent = item.text;



  }

  //show next person
  
  next.addEventListener('click', ()=>{
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
  });
  
  //show prev person
  
  prev.addEventListener('click', ()=>{
    currentItem--;
    if (currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showPerson();
    });
  
  // show random person

  random.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
    });