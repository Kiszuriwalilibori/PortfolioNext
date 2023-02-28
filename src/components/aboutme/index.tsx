import { memo } from "react";

const Content = () => {
    return (
        <div className="wrapper">
            <p>
                Aktualnie utrzymuję się z zakładania blogów i dorywczych zleceń różnego rodzaju. Interesują mnie raczej
                mechanizmy działania stron niż ich wygląd.
            </p>
            <p>
                Wolę ciemne i nasycone kolory (biorę na klatę oskarżenia o jarmarczność) niż klasyczny biurowy layout,
                ale nie mam problemu z dostosowaniem się do wymagań zleceniodawcy.
            </p>
            <hr className="aboutmeBreak"></hr>
            <p>
                W wolnych chwilach, jeśli pogoda dopisuje jeżdżę na rowerze po okolicznych lasach. Kiedy mam więcej
                czasu, po Puszczy Białowieskiej. Kiedy indziej słucham muzyki na kolumnach, które sam zbudowałem
                (przetworniki Usher). Robię całkiem dobre nalewki, którymi delektuję się wraz z rodziną i przyjaciółmi.
                Nieźle gotuję. Mam pojęcie o historii.
            </p>
        </div>

        // <>
        //     <p>Jestem web developerem z zamiłowania, acz nie z wykształcenia.</p>
        //     <p>
        //         Front-endu uczę się we własnym zakresie, z materiałów dostępnych w sieci, acz całkiem niedawno zdobyłem
        //         tytuł Technika Informatyka i ukończyłem kurs CISCO.
        //     </p>
        //     <p>
        //         Fascynacja programowaniem narodziła się z czystej ciekawości otaczającego nas internetowego świata oraz
        //         chęci zdobycia choćby cząstki wiedzy na temat jego funkcjonowania.Chciałem też coś zmienić w życiu, a
        //         zawsze byłem dobry z przedmiotów ścisłych.
        //     </p>
        //     <p>
        //         Aktualnie utrzymuję się z zakładania blogów i dorywczych zleceń różnego rodzaju. Interesują mnie raczej
        //         mechanizmy działania stron niż ich wygląd.
        //     </p>
        //     <p>
        //         Wolę ciemne i nasycone kolory (biorę na klatę oskarżenia o jarmarczność) niż klasyczny biurowy layout,
        //         ale nie mam problemu z dostosowaniem się do wymagań zleceniodawcy.
        //     </p>
        //     <hr className="aboutmeBreak"></hr>
        //     <p>
        //         W wolnych chwilach, jeśli pogoda dopisuje jeżdżę na rowerze po okolicznych lasach. Kiedy mam więcej
        //         czasu, po Puszczy Białowieskiej. Kiedy indziej słucham muzyki na kolumnach, które sam zbudowałem
        //         (przetworniki Usher). Robię całkiem dobre nalewki, którymi delektuję się wraz z rodziną i przyjaciółmi.
        //         Nieźle gotuję. Mam pojęcie o historii.
        //     </p>
        // </>
    );
};

export default memo(Content);
