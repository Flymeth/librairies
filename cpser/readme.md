# CPSER  
**A javascript librairy to make your own cps tester**  
  
> ## How to install ?
> add the script code  
> ```html
> <script src="https://flylibs.netlify.app/cpser/cpser.js"></script>
> ```
> in the bottom of your page (between `</body>` and `</html>`)  
  
## How it works ?
> the libray will use the elements' class name to now [what is what](#whats_what).  
> So there is the differents class witch you can use:  
> * Classes that you must use once
>   1. [`starter`](#starter)
>   2. [`restarter`](#restarter)
>   3. [`clicker`](#clicker)
>   4. [`timer`](#timer)
> * Classes that you can use as much as you want
>   1. [`clicks`](#clicks)
>   2. [`clock`](#clock)
>   3. [`result`](#result)

## What is what ?
> here you'll know what's the function of each classes than you can use
> let's start with the classes that you musn't use more than once
> ### starter
> this class is the starter button.
> you can use it only if the game hasn't started. when it is clicked, the timer start, and you can click as must as you can on the clicker button !  
> <u>ex:</u>
> 1. ```html
>    <button class="starter">start</button>
>    ```
> 2. ```html
>    <p>If you want to start, just click <span class="starter">here</span> !</p>
>    ```
> ---
> ### restarter
> this class is the restart button.
> you can use it only if the game has started. when you active him, the timer, clicks counter and cps result will reboot to the start value.  
> <u>ex:</u>
> 1. ```html
>	 <button class="restarter">click to restart !</button>
>    ```
> 2. ```html
>    <section>
>   	<h2 class="restarter">restart the game</h2>
>    </section>
>    ```
> ---
> ### clicker
> this one is where the user will click as fast as he can
> like the [restart button](#restart), you can use it only when the game has started. When you click it, the [cps number](#clicks) will be add of one.  
> <u>ex:</u>
> 1. ```html
>	 <div class="buttons">
>		<button class="clicker">click here !</button>
>	 </div>
>	 ```
> ---
> ### timer
> the element who haves this class must be an `<input>` or a `<select>` element who return a number value !
> this value will be the timer when the use can clicks whitch it can set by the user (in second).
> this class may not be use !  
> <u>ex:</u>
> 1. ```html
>	 <input type="number" placeholder="set the timer here !" class="timer"></input>
>	 ```
> 2. ```html
>	 <label for="timer">Want to change the timer ?</timer>
>	 <select id="timer" class="timer">
>		<option value="3">set it to 3 seconds</option>
>		<option value="5">set it to 5 seconds</option>
>		<option value="10">set it to 10 seconds</option>
>	 </select>
>    ```
> ---
> ---
> classes function that you can use as much as you want
> ### clicks
> elements who have this classe will display the number of clicks that the user actually haves.  
> <u>ex:</u>
> 1. ```html
>	 <p>You have actually <span class="clicks"></span> clicks!</p>
>	 ```
> 2. ```html
>	 <h3>Clicks: <span class="clicks"></span></h3>
>	 <sub>the title shows that you have <span class="clicks"></span> clicks !</sub>
>	 ```
> ### clock
> this class is where the timer is display. It is always display in second !  
> <u>ex:</u>
> 1. ```html
>	 <p>Time remaining: <span class="clicks"></span>s !</p>
>	 ```
> ### result
> It's where the result is display (the user's cps)
> <u>ex:</u>
> 1. ```html
>	 <p>You have: <span class="result"></span> cps !</p>
>	 ```
> ---
> ---
> If you want you can use many classes for one element:
> 1. ```html
>	 <button class="starter clicks clicker"></button>
>	 ```
> 2. ```html
>	 <p>click <span class="starter restarter">here</span> to starter or restart, and <span class="clicks clicker result">here</span> is where you can click, and where the result will be display !</p>
>	 ```
> You can also know if the game started or ended with the classes `cps_started` or `cps_ended`'
  
## Variables
> Yeah the librairy includes many variables. There are all here:
> 1. [`defaultTimerValue`](#defaultTimerValue)
> 2. [`minTimerValue`](#minTimerValue)
> 3. [`maxTimerValue`](#maxTimerValue)
> 4. [`timerSteps`](#timerSteps)
> 5. [`resultArrounds`](#resultArrounds)
> ### How it works ?
> Simply: just add a `meta` element in you site's heading with the name of `name="cpserOptions"`. Then in the `content=""` of the meta just add your properities liek that: `content="PROPERTIE1=VALUE1, PROPERTIE2=VALUE2"`.  
> In final you'll have somethings like that:  
> `<meta name="cpserOptions" content="props=value, props2=value2, [...]">`
> You're not oblige to put all properties value. If you don't change a propertie, it'll takes her default value.
>   
> ### defaultTimerValue
> The default value of the timer. It must be between the max value and the min value !
> ### minTimerValue
> the minimum value that the time can haves
> ### maxTimerValue
> the maximum value that the timer can haves
> ### timerSteps
> The timer precision.  
> <u>ex:</u>
> 1. if it sets to 1, the timer will do `[...]5; 4; 3; 2 [...]`
> 2. if it sets to 0.1, it will do `[...] 5.0; 5.9; 5.8; 5.7 [...]`
> 3. if it sets to 2, it will do `[...] 6; 4; 2; 0`
> ### resultArrounds
> the result precision  
> <u>ex:</u>
> 1. if it sets to 1, the result will be somethiong like `12` (for exemple)
> 1. if it sets to 0.1, the result will be somethiong like `12.4` (for exemple)
> 1. if it sets to 0.001, the result will be somethiong like `12.256` (for exemple)