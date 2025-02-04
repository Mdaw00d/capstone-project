import Link from "next/link";
import Sidebar from "./sidebar";
import Search from "./search";
import Image from "next/image";

function Header() {
  return (
    <>
      <main>
        {/* Nav1 Starts*/}
        <div className="bg-gray-100 p-2 flex justify-around">
          <div className="md:mr-96">
            <p>Welcome to AuraLine</p>
          </div>
          <div className="md:ml-48 gap-5 md:gap-12 flex">
            <div className="flex gap-x-1">
              <Image
                className="w-6 h-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAzZJREFUSEu1lV+IVHUUxz/nzq4uO/O7u2zkX0yKQgW1LUFESyofolLZepj9zbpJ5IoR+ZIPYU8+5YsKohCSEbjp/KkeRJJe0qIUxGAl1KzQMC3UdTXnXte0ufc0965JrjNzl8Lzes89n/M753vOEe6zyX2OTzKgNPwQQSWHyIvA47cTGgDdT6UpT2/r+UZJ1gd8POTSPK4fZXmDAAqUSGdeZ5kM1/KrDdinrVz3jwCzgZsIO6gEW1nRfiYOsvuPR2hKvY2yGhgHcoRr6adZI3+NhtQGFMq7QF4FzgHPY80PNV+xx59LSr9AmQy6BeuuSwaU/DmE+j1QQZ355NIDlPxJKDsJdUEcwOEQQh9ZM0jRW4zyNXALdR4ml/7935B7X1DwtgFvAduxZm0cPNQBYNKo7M7hhJ1k265Q8HYDPYi+S7e7MQnwM/AoIbPpMSfIl/sR6QX2VvuxfuRn3Vyt+wvADqx5g6L3LMoB4BusWZwEuBk37lQmxQYJKXi/AVO4xURWmkt3mpxKnQZ+xZrplK51EDpDwBWseSAJcBVox7lhyE7wKXiRzqdSSU27o/loNsLgbLUP5+k209g7aLjRUgauYk1HY0C+/B0i80BnYN2fKPgfgb4Wl8jRdwidFgjfA2jw5ENspo+CNwu4CHoU685PesEHQB+wFmu2U/IeJOA4woS7mhxl36ydvOIOUfTXoboJeB9r3mwM2OM9h8OXwDGseSJ2zl+fggQ7QRaghAjfEsoaejIX2aAOM/1T1fF7DNVF5NzDjQGqQtH7BWQ6aBfWjdRT34p+L6r9wI9YMzN50CKPopdFKQIXCHUOPe7lmoTS8FTC4HgsCg2Xkmv7fGyAyKvgHQSeiac0lVlCVoK7ft6v4yn7UTmeBNmHzdRcivW36cgEnwA6YrV0p1cjEm1POKhNXPQ/qfapK56FIOhkRXsk73us8T3Ilxci8hXQDLqLiWYVg4MthK150KXAMI4sIps5Vq9JyQcnX34ZkU/jFRcdGRUX4al4jau8RC4TKa6uJQNimfpLEP0MaLsd6QI4y7Hpow0VBmM4mf9EGJnWIuifaKpr9Fr+7yVKSjHh+9hK9D8gfwMfHiMoK9L0EAAAAABJRU5ErkJggg=="
                alt="Location Icon"
                width={24}
                height={24}
              />
              <p className="hidden md:block">Deliver to 423651</p>
            </div>
            <div className="flex gap-x-1">
              <Image
                className="w-6 h-6"
                src="/cart.png"
                alt="Cart Icon"
                width={24}
                height={24}
              />
              <p className="hidden md:block">All Offers</p>
            </div>
          </div>
        </div>
        {/* Nav1 Ends */}

        {/* Nav2 Starts*/}
        <nav className="bg-white mt-4">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <Sidebar />
            </div>
            <Link href="/" passHref>
              <div>
                <div className="bg-slate-100 p-2 w-[200px] -ml-32 rounded-md border border-slate-100">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGlJREFUSEtjZKAxYKSx+QyjFhAM4QEIoqKP/wk6C5+CPn4UR2P6gOYWUOR8TM0DEAc09wGpcYAWqejuozySSbaA5kE09C3AF8mMjLYMvXxHSPEkaZFMFQtIcR4RaodjTibC26QoGfpBBAACMxQZnsYpsQAAAABJRU5ErkJggg=="
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-black text-3xl -ml-20 font-bold -mt-[42px] ">
                  AuraLine
                </div>
              </div>
            </Link>
            <Search />
            <div className="flex items-center space-x-4">
              <Link href="/cart" passHref>
                <div className="group relative">
                  <Image className="h-6 w-6" src="/cart.png" alt="Cart" width={24} height={24} />
                  <div className="absolute top-10 right-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View Cart
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <br />
      </main>
    </>
  );
}

export default Header;
