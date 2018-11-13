public class tj4 {
	public static void zoop() {
		baffle();
		System.out.print("You what ");
		baffle();	
	}
	public static void main(String[] args) {
		System.out.print("No, I ");
		zoop();
		System.out.print("I ");
		baffle();	
		System.out.println("Expected output: No, I wug.");
		System.out.println("You what wug.");
		System.out.println("I wug.");

	}
	public static void baffle(){
		System.out.print("wug");
		ping();	
	}
	public static void ping(){
		System.out.println(".");	
	}
}
//This is a small comment
