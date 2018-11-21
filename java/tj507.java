import java.util.Scanner;
import java.util.Random;

public class tj507 {
	public static void main(String[] args){
			int n, a;
			Random random = new Random();
//			Scanner in = new Scanner(System.in);
//			n = in.nextInt();
			System.out.print("Please guess a number: ");

			n = 0;
			a = random.nextInt(100) + 1;
			guess(n, a);
	}
	public static void guess(int n, int a){
			Scanner in = new Scanner(System.in);
			n = in.nextInt();
			System.out.println("Random number is: " + a);
			System.out.println("Guess is: " + n);
			if(n < a){
				System.out.println("Guess is too low");
				System.out.print("Guess again: ");
				guess(n, a);
			}
			else if(n == a){
				System.out.println("Guess is equal");	
			}
			else{
				System.out.println("Guess is too high");	
				System.out.print("Guess again: ");
				guess(n, a);	
			}
			
	}

			

}
