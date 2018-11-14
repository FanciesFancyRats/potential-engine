public class tj505{
	public static void main(String[] args){
		song(99);
	
	}
	public static void nBottles(int n){
		if(n == 0){
			System.out.print("No bottles of beer");	
		}
		else{
			System.out.print(n + " bottles of beer");	
		}
	}
	public static void song(int n){
		if(n >= 0){
			nBottles(n);
			System.out.println(" on the wall,");
			nBottles(n);
			System.out.println(",");
			if(n > 0){
			System.out.println("take one down, pass it around,");
			nBottles(n - 1);
			System.out.println(" on the wall,");
			}
			song(n - 1);
		}
		
	}
}
