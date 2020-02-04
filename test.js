function asyncFunction(callback)
{
    setTimeout(callback, 200)
}
var color = 'blue'

(function(o) { 
    alert(o); 
})('water'); 

/*
(function(color)
{
    asyncFunction(
        function(color)
        {
            console.log(`The color is ${color}`)
        }
    )
})(color)

color = 'green'
*/