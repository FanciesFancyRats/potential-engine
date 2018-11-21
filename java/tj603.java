import java.util.Scanner;
public class tj603{
	public static void main(String[] args){
		int x, y, z;
		Scanner in = new Scanner(System.in);	
		x = in.nextInt();
		y = in.nextInt();
		z = in.nextInt();
		System.out.println(isTri(x, y, z));

	}
	public static boolean isTri(int x, int y, int z){
		if(x > y && x > z){
			return(!(x > (y + z)));	
		}		
		else if(y > x && y > z){
			return(!(y > (x + z)));
		
		}
		else{
			return(!(z > (x + y)));
	
		}
	}
}
