// complete the given function

function palindrome(str){
	const string= str.toLowerCase();
	const len=str.length;
	//loop through half of the string
	for(let i=0; i<len; i++)
		{
			//check if first and last strings are same
			if(string[i] !==string[len-1-i])
			{
				return false;
			}
		}
	return true;

}
module.exports = palindrome
