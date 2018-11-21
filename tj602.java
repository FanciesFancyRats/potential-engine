import java.util.Scanner;


public class tj602{
	public static void main(String[] args){
		int n, a;
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		a = in.nextInt();
		System.out.println(isDiv(n, a));
	}	
	public static boolean isDiv(int n, int a){
		return((n % a) == 0);		
	}
}
