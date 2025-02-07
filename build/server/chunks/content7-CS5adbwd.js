const contents = [
  {
    name: "Research",
    url: "/research",
    topics: [
      {
        name: "Parameterized algorithms",
        url: "/research/parameterized",
        topics: [
          {
            name: "Tournament",
            url: "/research/parameterized/tournament"
          },
          {
            name: "Bipartite Tournament",
            url: "/research/parameterized/bitournament"
          },
          {
            name: "Club",
            url: "/research/parameterized/club"
          },
          {
            name: "Induced Matching",
            url: "/research/parameterized/induced"
          }
        ]
      },
      {
        name: "Kernelization",
        url: "/research/kernelization",
        topics: [
          {
            name: "Component Order Connectivity",
            url: "/research/kernelization/coc"
          },
          {
            name: "Connected Dominating Set",
            url: "/research/kernelization/cds"
          }
        ]
      },
      {
        name: "Quantum-safe Cryptography",
        url: "/research/crypto",
        topics: [
          {
            name: "Reducing Lattice Enumeration Search Trees",
            url: "/research/crypto/reduceLattice"
          },
          {
            name: "Self-dual Codes",
            url: "/research/crypto/selfdual"
          },
          {
            name: "Faster Lattice Enumeration",
            url: "/research/crypto/fasterLattice"
          },
          {
            name: "Obtuse Lattice Bases",
            url: "/research/crypto/obtuse"
          }
        ]
      },
      {
        name: "Quantum Information Theory",
        url: "/research/qit",
        topics: [
          {
            name: "Schmidt Decomposition of Multipartite states",
            url: "/research/qit/schmidt"
          },
          {
            name: "On properties of Schmidt Decomposition",
            url: "/research/qit/schmidtProperties"
          },
          {
            name: "Local Operations in Multiparty Quantum Systems",
            url: "/research/qit/local"
          }
        ]
      },
      {
        name: "Parameterized Zoo",
        url: "/research/parazoo"
      }
    ]
  }
];
const contentNav = {
  "/research": {
    "name": "Research",
    "url": "/research",
    "previous": "/research",
    "next": "/research/parameterized"
  },
  "/research/parameterized": {
    "name": "Parameterized algorithms",
    "url": "/research/parameterized",
    "previous": "/research",
    "next": "/research/parameterized/tournament"
  },
  "/research/parameterized/tournament": {
    "name": "Tournament",
    "url": "/research/parameterized/tournament",
    "previous": "/research/parameterized",
    "next": "/research/parameterized/bitournament"
  },
  "/research/parameterized/bitournament": {
    "name": "Bipartite Tournament",
    "url": "/research/parameterized/bitournament",
    "previous": "/research/parameterized/tournament",
    "next": "/research/parameterized/club"
  },
  "/research/parameterized/club": {
    "name": "Club",
    "url": "/research/parameterized/club",
    "previous": "/research/parameterized/bitournament",
    "next": "/research/parameterized/induced"
  },
  "/research/parameterized/induced": {
    "name": "Induced Matching",
    "url": "/research/parameterized/induced",
    "previous": "/research/parameterized/club",
    "next": "/research/kernelization"
  },
  "/research/kernelization": {
    "name": "Kernelization",
    "url": "/research/kernelization",
    "previous": "/research/parameterized/induced",
    "next": "/research/kernelization/coc"
  },
  "/research/kernelization/coc": {
    "name": "Component Order Connectivity",
    "url": "/research/kernelization/coc",
    "previous": "/research/kernelization",
    "next": "/research/kernelization/cds"
  },
  "/research/kernelization/cds": {
    "name": "Connected Dominating Set",
    "url": "/research/kernelization/cds",
    "previous": "/research/kernelization/coc",
    "next": "/research/crypto"
  },
  "/research/crypto": {
    "name": "Quantum-safe Cryptography",
    "url": "/research/crypto",
    "previous": "/research/kernelization/cds",
    "next": "/research/crypto/reduceLattice"
  },
  "/research/crypto/reduceLattice": {
    "name": "Reducing Lattice Enumeration Search Trees",
    "url": "/research/crypto/reduceLattice",
    "previous": "/research/crypto",
    "next": "/research/crypto/selfdual"
  },
  "/research/crypto/selfdual": {
    "name": "Self-dual Codes",
    "url": "/research/crypto/selfdual",
    "previous": "/research/crypto/reduceLattice",
    "next": "/research/crypto/fasterLattice"
  },
  "/research/crypto/fasterLattice": {
    "name": "Faster Lattice Enumeration",
    "url": "/research/crypto/fasterLattice",
    "previous": "/research/crypto/selfdual",
    "next": "/research/crypto/obtuse"
  },
  "/research/crypto/obtuse": {
    "name": "Obtuse Lattice Bases",
    "url": "/research/crypto/obtuse",
    "previous": "/research/crypto/fasterLattice",
    "next": "/research/qit"
  },
  "/research/qit": {
    "name": "Quantum Information Theory",
    "url": "/research/qit",
    "previous": "/research/crypto/obtuse",
    "next": "/research/qit/schmidt"
  },
  "/research/qit/schmidt": {
    "name": "Schmidt Decomposition of Multipartite states",
    "url": "/research/qit/schmidt",
    "previous": "/research/qit",
    "next": "/research/qit/schmidtProperties"
  },
  "/research/qit/schmidtProperties": {
    "name": "On properties of Schmidt Decomposition",
    "url": "/research/qit/schmidtProperties",
    "previous": "/research/qit/schmidt",
    "next": "/research/qit/local"
  },
  "/research/qit/local": {
    "name": "Local Operations in Multiparty Quantum Systems",
    "url": "/research/qit/local",
    "previous": "/research/qit/schmidtProperties",
    "next": "/research/parazoo"
  },
  "/research/parazoo": {
    "name": "Parameterized Zoo",
    "url": "/research/parazoo",
    "previous": "/research/qit/local",
    "next": "/research/parazoo"
  }
};

export { contents as a, contentNav as c };
//# sourceMappingURL=content7-CS5adbwd.js.map
