// Hamburger menu operation
{
  const navHamburgerBtn = document.getElementById('nav-hamburger-btn')
  const navMenu = document.getElementById('nav-menu')

  navHamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    if (navMenu.classList.contains('hidden')) {
      document.getElementById('hamburger-btn-img').setAttribute('src', './dist/images/icon-hamburger.svg')
    }
    else {
      document.getElementById('hamburger-btn-img').setAttribute('src', './dist/images/icon-close.svg')
    }
  })
}

// Testimonials operation
{
  // Testimonial data
  const testimonials = [{
    id: 1,
    name: 'Anisha Li',
    quote: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    imageSrc: './dist/images/avatar-anisha.png'
  },
  {
    id: 2,
    name: 'Ali Bravo',
    quote: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross - channel confusion and everyone is much more focused.”`,
    imageSrc: './dist/images/avatar-ali.png'
  },
  {
    id: 3,
    name: 'Richard Watts',
    quote: `“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”`,
    imageSrc: './dist/images/avatar-richard.png'
  },
  {
    id: 4,
    name: 'Shanai Gough',
    quote: `“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in -sync without being intrusive.”`,
    imageSrc: './dist/images/avatar-shanai.png'
  }]

  const testimonialsDisplayBox = document.getElementById('testimonials-display-box')
  const testimonialSwitchBtns = document.getElementById('testimonial-switch-btns')

  testimonialSwitchBtns.addEventListener('click', handleTestimonialSwitchBtnsClick)

  renderTestimonialCards(1, testimonials, testimonialsDisplayBox)
  renderSwitchBtns(1, testimonials, testimonialSwitchBtns)

  // Funtion declarations 
  function handleTestimonialSwitchBtnsClick (e) {
    if (e.target.dataset?.testimonialId) {
      renderTestimonialCards(e.target.dataset.testimonialId, testimonials, testimonialsDisplayBox)
      renderSwitchBtns(e.target.dataset.testimonialId, testimonials, testimonialSwitchBtns)
    }
  }

  function renderTestimonialCards (id, testimonials, containerEl) {
    containerEl.innerHTML = ''
    for (t of testimonials) {
      containerEl.append(getTestmonialCard(id, t))
    }
  }

  function getTestmonialCard (id, testimonialData) {
    const card = document.createElement('section')
    card.classList = `${id.toString() === testimonialData.id.toString() ? '' : 'hidden'} relative p-4 overflow-hidden md:w-[670px] md:flex-none md:block`
    card.innerHTML = `<div class="absolute -z-50 top-[60px] left-0 w-full h-full bg-very-light-gray"></div>
    <img src="${testimonialData.imageSrc}" alt="Avatar ${testimonialData.name}" class="mx-auto max-w-[90px]">
    <h3 class="my-4 font-bold text-dark-blue">${testimonialData.name}</h3>
    <blockquote class="mb-6 text-dark-grayish-blue">${testimonialData.quote}</blockquote>`

    return card
  }

  function renderSwitchBtns (id, testimonials, containerEl) {
    containerEl.innerHTML = ''
    for (let i = 0; i < testimonials.length; i++) {
      const switchBtn = document.createElement('button')
      switchBtn.classList = `rounded-full w-3 h-3 border border-bright-red border-solid ${id.toString() === testimonials[i].id.toString() ? 'bg-bright-red' : ''} md:hidden`
      switchBtn.setAttribute('data-testimonial-id', testimonials[i].id)
      containerEl.append(switchBtn)
    }
  }
}