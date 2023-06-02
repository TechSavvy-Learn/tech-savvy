<script>
    import '@public/css/style.css';
    let beginnerActive = false;
    let intermediateActive = false;
    let advancedActive = false;
    let activeAge = true;

</script>

<style>
  .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
  }

  .container h1 {
      font-weight: 400;
      font-size: 2rem;
  }

  .container img {
      width: 340px;
  }

  .levelToggle {
      display: flex;
      gap: 10px;
  }

  .agesContainer {
      display: flex;
      gap: 0px;
  }

  .agesInner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .agesInner input {
      border: none;
      background-color: none;
      font-size: 1.2rem;
      font-weight: 700;
      background-color: transparent;
  }

  /* This is the section for the level input toggles */
  .levelToggle input {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--white-col);
      font-size: 18px;
      background-color: var(--gray-blue);
      width: 180px;
      height: 90px;
      border-radius: 5px;
      border: none;
  }


  .levelToggle input.active {
      background: var(--light-gray-blue);
  }


/*  This is where the ages input toggling starts */

  .sevenTwelve input {
      color: var(--fire-orange);
      padding-bottom: 5px;
      border-bottom: 3px solid var(--fire-orange);
  }

  .thirteen input {
      color: var(--black-col);
      padding-bottom: 5px;
      border-bottom: 3px solid var(--black-col);
  }

  .agesInner input.sevenActive {
      color: var(--fire-orange);
      border-bottom-color: var(--fire-orange);
  }

  .agesInner.sevenTwelve input.thirteenActive {
      color: var(--black-col);
      padding-bottom: 5px;
      border-bottom: 3px solid var(--black-col);
  }


</style>
<section class="container">
  <h1>Create an Account</h1>
  <img src="public/images/signUp/circle-dash/level.svg" alt="emailSvg">
  <h1>How tech savvy are you?</h1>
  <div class="agesContainer">
      <div class="agesInner sevenTwelve">
          <input 
            type="button" 
            value="AGES 7-12"
            class="{activeAge ? 'sevenActive' : 'thirteenActive'} pointer" 
            on:click={() => { activeAge = !activeAge }} 
            >
      </div>  
      <div class="agesInner thirteen">
          <input 
            type="button" 
            value="AGES 13+"
            class="{activeAge ? 'thirteenActive' : 'sevenActive'} pointer" 
            on:click={() => { activeAge = !activeAge }} 
          >
      </div>
  </div>
  <div class="levelToggle">
      <input 
        type="button" 
        value="BEGINNER"
        class="{beginnerActive ? 'active' : ''} pointer" 
        on:click={() => { beginnerActive = !beginnerActive }} 
      >
      <input 
        type="button" 
        value="INTERMEDIATE"
        class="{intermediateActive ? 'active' : ''} pointer" 
        on:click={() => { intermediateActive = !intermediateActive }} 
      >
      <input 
        type="button" 
        value="ADVANCED"
        class="{advancedActive ? 'active' : ''} pointer" 
        on:click={() => { advancedActive = !advancedActive }} 
      >
  </div>
</section>


