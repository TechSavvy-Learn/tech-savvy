<script>
    export let checked = false;
  </script>
  
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
  
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 34px;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  
    input:checked + .slider {
      background-color: var(--fire-orange);
      box-shadow: 0 0 1px #var(--fire-orange);
    }
  
    .agesContainer {
      display: flex;
      gap: 10px;
    }
  
    .agesInner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .agesInner.orange h4 {
      color: var(--fire-orange);
    }
  
    .agesInner.orange hr {
      background-color: var(--fire-orange);
    }
  
    h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--black-col);
    }
  
    .hrSevenTwelve {
      width: 120%;
      height: 3px;
      border-width: 0;
      color: gray;
      background-color: var(--light-gray);
    }
  
    .hrThirteen {
      width: 120%;
      height: 3px;
      border-width: 0;
      color: gray;
      background-color: var(--light-gray);
    }
  </style>
  
  <label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider"></span>
  </label>
  
  <div class="agesContainer">
    <div class="agesInner pointer sevenTwelve {checked ? 'orange' : ''}">
      <h4>AGES 7 - 12</h4>
      <hr class="hrSevenTwelve" />
    </div>
    <div class="agesInner pointer thirteen {checked ? 'orange' : ''}">
      <h4>AGES 13+</h4>
      <hr class="hrThirteen" />
    </div>
  </div>
  