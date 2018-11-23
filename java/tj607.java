import java.util.Scanner;

public class tj607{
	public static void main(String[] args){
		int n;
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		System.out.println(oddSum(n));
	}
	public static int oddSum(int n){
		System.out.println("n is: " + n);
		if(n == 1){
			return 1;
		}	
		else if((n % 2) != 0){
			return(n + oddSum(n - 2));		
		}
		else{
			return(oddSum(n - 1));	
		}
			
	}
}
