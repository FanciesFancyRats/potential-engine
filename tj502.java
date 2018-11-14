public class tj502 {
	public static void zoop(String fred, int bob){
		System.out.println(fred);
	if ( bob == 5) {
			ping("not ");
		}	
		else{
			System.out.println("!");
		}
	}
	public static void main(String[] args){
		int bizz = 5;
		int buzz = 2;
		zoop("just for", bizz);
		clink(2 * buzz);	
		System.out.println("Expected output: ");
		System.out.println("just for ");
	       	System.out.println("any not more ");
		System.out.println("It's breakfast ");
		System.out.println("!");
	}
	public static void clink(int fork){
		System.out.print("It's ");
		zoop("breakfast ", fork);

	}
	public static void ping(String strangStrung){
		System.out.println("any " + strangStrung + "more ");
	}
}
