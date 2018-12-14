import java.util.Scanner;

public class tj608{
	public static void main(String[] args){
		int n, m;
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		m = in.nextInt();
		System.out.println(ack(m, n));
			
	}
	public static int ack(int m, int n){
		if(m > 0 && n == 0){
			return(ack(m - 1, 1));	
		}	
		else if(m > 0 && n > 0){
			return(ack(m - 1, ack(m, n - 1)));	
		}
		else{
			return(n + 1);	
		}
	}
}
