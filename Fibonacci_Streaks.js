function FibBro(argument)
{
    var currentNumber = argument
    var previousNumber = argument - 1
    for (let i = 0; i < 10000; i++)
    {
        var output = previousNumber + currentNumber
        console.log(output)
        previousNumber = currentNumber
        currentNumber = output
    }
}