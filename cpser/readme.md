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
>> this class is the starter button.
>> you can use it only if the game hasn't started. when it is clicked, the timer start, and you can click as must as you can on the clicker button !
> ### restarter
>> this class is the restart button.
>> you can use it only if the game has started. when you active him, the timer, clicks counter and cps result will reboot to the start value