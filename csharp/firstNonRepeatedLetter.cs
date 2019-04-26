using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static string FirstNonRepeatingLetter(string s)
  {
    var dictionary = new Dictionary<char, int> ();
    int index = 0;
    foreach (char c in s)
    {
      if (dictionary.ContainsKey(c))
        dictionary[c] = -1;
      else
        dictionary.Add(c, index);
      index++;
    }
    int lowestIndex = dictionary.Where(x => x.Value > 0).Min(y => y.Value);
    return dictionary.Where(x => x.Value == lowestIndex).FirstOrDefault().Key.ToString();;
  }
}