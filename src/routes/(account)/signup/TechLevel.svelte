<script>
    import '@public/css/style.css';
    let beginnerActive = false;
    let intermediateActive = false;
    let advancedActive = false;
    let activeAge = 'sevenTwelve';

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
    
    .thirteenActive .sevenTwelve input {
      color: var(--black-col);
      border-bottom-color: var(--black-col);
    }
    
    .sevenActive .thirteen input {
      color: var(--fire-orange);
      border-bottom-color: var(--fire-orange);
    }
    
    .agesActive {
      color: var(--fire-orange);
      background-color: var(--fire-orange);
    }
    
    .sevenActive {
      color: black !important;
      border-bottom: 3px solid var(--black-col) !important;
    }
    
    .levelToggle {
      display: flex;
      gap: 10px;
    }
    
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
    
    .active {
      background: var(--light-gray-blue);  
    }
  </style>
  

<section class="container">
    <h1>Create an Account</h1>
    <img src="public/images/signUp/circle-dash/level.svg" alt="emailSvg">
    <h1>How tech savy are you?</h1>
    <div class="agesContainer">
        <div class="agesInner pointer sevenTwelve">
            <input class="pointer {activeAge === 'sevenTwelve' ? 'agesActive sevenActive' : ''}" type="button" on:click={() => { activeAge = 'sevenTwelve' }} value="AGES 7-12">
        </div>  
        <div class="agesInner pointer thirteen">
            <input class="pointer {activeAge === 'thirteen' ? 'agesActive thirteenActive' : ''}" type="button" on:click={() => { activeAge = 'thirteen' }} value="AGES 13+">
        </div>
    </div>
    <div class="levelToggle">
        <input class="pointer {beginnerActive ? 'active' : ''}" type="button" on:click={() => { beginnerActive = !beginnerActive }} value="BEGINNER">
        <input class="pointer {intermediateActive ? 'active' : ''}" type="button" on:click={() => { intermediateActive = !intermediateActive }} value="INTERMEDIATE">
        <input class="pointer {advancedActive ? 'active' : ''}" type="button" on:click={() => { advancedActive = !advancedActive }} value="ADVANCED">
    </div>
</section>

