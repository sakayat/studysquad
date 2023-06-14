import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";
import Order from "@/components/Order";
import { redirect } from "next/navigation";

const OrderPage = async () => {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("user/login");
	}
	if (!session) {
		return null;
	}
	const customer = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
		include: {
			orders: true,
		},
	});

	return (
		<div className="order py-10">
			<h2 className="text-xl">
				{`${
					customer?.orders?.length > 0
						? `You have enrolled in ${customer?.orders?.length}`
						: "You have not enrolled in any courses yet"
				}
				${customer?.orders?.length === 1 ? "course" : "courses"}`}
			</h2>
			<div className="flex flex-wrap gap-5 py-5">
				{customer?.orders?.map((course) => (
					<Order key={course.id} course={course} session={session} />
				))}
			</div>
		</div>
	);
};

export default OrderPage;
