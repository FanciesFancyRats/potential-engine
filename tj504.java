
public class tj504 {
	public static void main(String[] args){
		boolean fermatWasCorrect = true;
		for(int a = 1; a < 50; a++){
			for(int b = 1; b < 50; b++){
				for(int c = 1; c < 50; c++){
					for(int n = 1; n < 10; n++){
						if(checkFermat(a, b, c, n)){
							fermatWasCorrect = false;
							break;		
						}			
					}
				}
			}
		}
		
	System.out.println(Math.pow(12, 10) + 1);
	System.out.println(Math.pow(12, 10));
	
	if(fermatWasCorrect){
		System.out.println("Fermat was correct");	
	}
	else{
		System.out.println("I've made a terrible mistake");	
	}
	}
	public static boolean checkFermat(int a, int b, int c, int n){
		if((n > 2) && ((Math.pow(a, n) + Math.pow(b, n)) == Math.pow(c, n))){
			System.out.println(Math.pow(a, n) + Math.pow(b, n));

			System.out.println(Math.pow(c, n));
			System.out.println(n);

	
			return(true);
		}
		else{
			return(false);	
		}
			
	}
	
}
