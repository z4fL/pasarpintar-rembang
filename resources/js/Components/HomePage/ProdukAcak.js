import { Link } from "@inertiajs/inertia-react";
import React from "react";

const ProdukAcak = () => {
  return (
    <div className="container">
      <div className="bg-white border-2 border-sky-900 rounded-lg overflow-hidden">
        <div className="flex flex-wrap border-b-2 border-slate-600 -mb-px px-4 text-sm font-medium text-center text-slate-700">
          <div className="inline-flex p-3 rounded-t-lg">
            <h2 className="text-slate-700 font-medium text-lg">
              Produk Acak
            </h2>
          </div>
        </div>
        <div className="relative p-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center overflow-y-auto scrollbar-hide">
            {Array.from({ length: 18 }, (_, i) => (
              <div
                key={i}
                className="w-full bg-white border-2 border-slate-600 rounded-md overflow-hidden"
              >
                <Link href={`/produk/${i}`}>
                  <img
                    className="bg-cover bg-center w-full p-2"
                    src="https://cf.shopee.co.id/file/88063c6dfd1dea9848c17b33205b71b8_tn"
                    alt="productImage"
                  />
                  <div className="px-2 py-2.5">
                    <h5 className="text-sm font-semibold tracking-tight text-slate-700 line-clamp-3">
                      Apple Watch Series wow keren banget cuy coba aja deh
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 pt-1">
                        1,49rb+ terjual
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukAcak;
