import java.util.Scanner;
public class tj604{
	public static void main(String[] args){
		double pi, n;
		Scanner in = new Scanner(System.in);
		pi = Math.sin(3.14159);
		System.out.println(multadd(1.0, 2.0, 3.0));
		System.out.println(multadd((Math.cos(3.14159/4)), (1/2), (Math.sin(3.14159/4))));
		n = in.nextInt();	


	}
	public static double multadd(double a, double b, double c){
		return(a * b + c);			
	}
	public static double expSum(double n){
		return(multadd(n, Math.E, Math.PI));	
	}
}
