function getMiddle(str)
{
  var length = str.length;
  var middle = Math.floor(length/2);
  if(length%2 === 0)
  {
    return str[middle-1] + str[middle]
    }
    else
    {
    return str[middle];
    }
}