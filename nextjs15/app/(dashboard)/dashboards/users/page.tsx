import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div>Dashboard Users</div>

      <ul className="mt-10">
        <li>
          <Link href="/dashboards/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboards/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboards/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/dashboards/users/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Page;
