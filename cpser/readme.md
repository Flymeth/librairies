# CPSER  
_A javascript librairy to make your own cps tester_  
  
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