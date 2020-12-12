const balanceSheetTemplate = {
    assets: {
        nonCurrent: [
            {
                name: 'Ativos fixos tangíveis',
                taxonomyCodes: [
                    268,
                    269,
                    270,
                    271,
                    272,
                    273,
                    274,
                    -275,
                    -276,
                    -277,
                    -278,
                    -279,
                    -280,
                    -281,
                    -282,
                    -283,
                    -284,
                    -285,
                    -286,
                    -287,
                    -288,
                    306,
                    310,
                    -314,
                    -318,
                ],
                value: 0,
            },
            {
                name: 'Propriedades de investimento',
                taxonomyCodes: [
                    259,
                    260,
                    261,
                    -262,
                    -263,
                    -264,
                    -265,
                    -266,
                    -267,
                    305,
                    309,
                    -313,
                    -317,
                ],
                value: 0,
            },
            {
                name: 'Goodwill',
                taxonomyCodes: [
                    217,
                    222,
                    227,
                    -236,
                    -237,
                    -238,
                    -240,
                    -245,
                    -250,
                    289,
                    -294,
                    -299,
                ],
                value: 0,
            },
            {
                name: 'Ativos intangíveis',
                taxonomyCodes: [
                    290,
                    291,
                    292,
                    293,
                    -295,
                    -296,
                    -297,
                    -298,
                    -300,
                    -301,
                    -302,
                    -303,
                    307,
                    311,
                    -315,
                    -319,
                ],
                value: 0,
            },
            {
                name: 'Ativos biológicos',
                taxonomyCodes: [
                    197,
                    198,
                    -200,
                    -202,
                    215
                ],
                value: 0,
            },
            {
                name: 'Participações financeiras - método da equivalência patrimonial',
                taxonomyCodes: [
                    216,
                    221,
                    226,
                    -239,
                    -244,
                    -249
                ],
                value: 0,
            },
            {
                name: 'Outros investimentos financeiros',
                taxonomyCodes: [
                    218,
                    219,
                    220,
                    223,
                    224,
                    225,
                    228,
                    229,
                    230,
                    231,
                    232,
                    233,
                    234,
                    235,
                    -241,
                    -242,
                    -243,
                    -246,
                    -247,
                    -248,
                    -251,
                    -252,
                    -253,
                    -254,
                    -255,
                    -256,
                    -257,
                    -258,
                    304,
                    308,
                    -312,
                    -316,
                ],
                value: 0,
            },
            {
                name: 'Créditos a receber',
                taxonomyCodes: [
                    -68,
                    -70,
                    112,
                    -121,
                    -123,
                    129,
                    -141,
                    -145
                ],
                ifDebtBalance: [
                    62,
                    64,
                    114,
                    125,
                    127,
                    139
                ],
                value: 0,
            },
            {
                name: 'Ativos por impostos diferidos',
                taxonomyCodes: [
                    133,
                    -143
                ],
                value: 0,
            },
        ],
        current: [
            {
                name: 'Inventários',
                taxonomyCodes: [
                    165,
                    166,
                    167,
                    -168,
                    -169,
                    -170,
                    171,
                    172,
                    173,
                    174,
                    175,
                    176,
                    -177,
                    -178,
                    -179,
                    -180,
                    -181,
                    -182,
                    183,
                    184,
                    -185,
                    -186,
                    187,
                    188,
                    189,
                    -190,
                    -191,
                    -192,
                    193,
                    -194,
                    209,
                    210,
                    211,
                    212,
                    213,
                ],
                value: 0,
            },
            {
                name: 'Ativos biológicos',
                taxonomyCodes: [
                    195,
                    196,
                    -199,
                    -201,
                    214
                ],
                value: 0,
            },
            {
                name: 'Clientes',
                taxonomyCodes: [
                    -24,
                    -25,
                    -26,
                    -27,
                    -28,
                    -29,
                    -30,
                    -31,
                    -32,
                    -33,
                    -34,
                    -35,
                    -36,
                ],
                ifDebtBalance: [
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22
                ],
                value: 0,
            },
            {
                name: 'Estado e outros entes públicos',
                taxonomyCodes: [
                    73,
                    74,
                    79,
                    80
                ],
                ifDebtBalance: [
                    71,
                    76,
                    77,
                    81,
                    82,
                    83,
                    84,
                    85
                ],
                value: 0,
            },
            {
                name: 'Capital subscrito e não realizado',
                taxonomyCodes: [
                    106,
                    107,
                    -115,
                    -116
                ],
                value: 0,
            },
            {
                name: 'Outros créditos a receber',
                taxonomyCodes: [
                    51,
                    -52,
                    55,
                    56,
                    -65,
                    -66,
                    -67,
                    -69,
                    108,
                    111,
                    -117,
                    -118,
                    -119,
                    -120,
                    -122,
                    128,
                    130,
                    -140,
                    -142,
                    -144,
                ],
                ifDebtBalance: [
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    61,
                    63,
                    109,
                    110,
                    113,
                    124,
                    126,
                    138,
                ],
                value: 0,
            },
            {
                name: 'Diferimentos',
                taxonomyCodes: [
                    146
                ],
                value: 0,
            },
            {
                name: 'Ativos financeiros detidos para negociação',
                taxonomyCodes: [
                    4,
                    6
                ],
                value: 0,
            },
            {
                name: 'Outros ativos financeiros',
                taxonomyCodes: [
                    8
                ],
                value: 0,
            },
            {
                name: 'Ativos não correntes detidos para venda',
                taxonomyCodes: [
                    320,
                    321,
                    322,
                    323,
                    324,
                    -326,
                    -327,
                    -328,
                    -329,
                    -330
                ],
                value: 0,
            },
            {
                name: 'Caixa e depósitos bancários',
                taxonomyCodes: [
                    1
                ],
                ifDebtBalance: [
                    2,
                    3
                ],
                value: 0,
            },
        ],
    },
    liabilities: {
        nonCurrent: [
            {
                name: 'Provisões',
                taxonomyCodes: [
                    148,
                    149,
                    150,
                    151,
                    152,
                    153,
                    154,
                    155
                ],
                value: 0,
            },
            {
                name: 'Financiamentos obtidos',
                taxonomyCodes: [
                    87,
                    89,
                    91,
                    93,
                    95,
                    97,
                    99,
                    101,
                    103,
                    105
                ],
                value: 0,
            },
            {
                name: 'Responsabilidades por benefícios pós-emprego',
                taxonomyCodes: [
                    132
                ],
                value: 0,
            },
            {
                name: 'Passivos por impostos diferidos',
                taxonomyCodes: [
                    134
                ],
                value: 0,
            },
            {
                name: 'Outras dívidas a pagar',
                taxonomyCodes: [
                    58,
                    60,
                    136
                ],
                ifCreditBalance: [
                    62,
                    64,
                    114,
                    125,
                    127,
                    139
                ],
                value: 0,
            },
        ],
        current: [
            {
                name: 'Fornecedores',
                taxonomyCodes: [],
                ifCreditBalance: [
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                ],
                value: 0,
            },
            {
                name: 'Adiantamentos de clientes',
                taxonomyCodes: [
                    23,
                    137
                ],
                ifCreditBalance: [
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22
                ],
                value: 0,
            },
            {
                name: 'Estado e outros entes públicos',
                taxonomyCodes: [
                    72,
                    75,
                    78
                ],
                ifCreditBalance: [
                    71,
                    76,
                    77,
                    81,
                    82,
                    83,
                    84,
                    85
                ],
                value: 0,
            },
            {
                name: 'Financiamentos obtidos',
                taxonomyCodes: [
                    86,
                    88,
                    90,
                    92,
                    94,
                    96,
                    98,
                    100,
                    102,
                    104
                ],
                ifCreditBalance: [
                    2,
                    3
                ],
                value: 0,
            },
            {
                name: 'Outras dívidas a pagar',
                taxonomyCodes: [
                    53,
                    54,
                    57,
                    59,
                    131,
                    135
                ],
                ifCreditBalance: [
                    61,
                    63,
                    109,
                    110,
                    113,
                    124,
                    126,
                    138
                ],
                value: 0,
            },
            {
                name: 'Diferimentos',
                taxonomyCodes: [
                    147
                ],
                value: 0,
            },
            {
                name: 'Passivos financeiros detidos para negociação',
                taxonomyCodes: [
                    5,
                    7
                ],
                value: 0,
            },
            {
                name: 'Outros passivos financeiros',
                taxonomyCodes: [
                    9
                ],
                value: 0,
            },
            {
                name: 'Passivos não correntes detidos para venda',
                taxonomyCodes: [
                    325
                ],
                value: 0,
            },
        ],
    },
    equity: [
        {
            name: 'Capital subscrito',
            taxonomyCodes: [
                331
            ],
            value: 0,
        },
        {
            name: 'Ações (quotas) próprias',
            taxonomyCodes: [
                -332
            ],
            ifCreditOrDebit: [
                333
            ],
            value: 0,
        },
        {
            name: 'Outros instrumentos de capital próprio',
            taxonomyCodes: [
                334
            ],
            value: 0,
        },
        {
            name: 'Prémios de emissão',
            taxonomyCodes: [
                335
            ],
            value: 0,
        },
        {
            name: 'Reservas legais',
            taxonomyCodes: [
                336
            ],
            value: 0,
        },
        {
            name: 'Outras reservas',
            taxonomyCodes: [
                337
            ],
            value: 0,
        },
        {
            name: 'Resultados transitados',
            taxonomyCodes: [],
            ifCreditOrDebit: [
                338
            ],
            value: 0,
        },
        {
            name: 'Excedentes de revalorização',
            taxonomyCodes: [
                343,
                -344,
                345,
                -346
            ],
            value: 0,
        },
        {
            name: 'Ajustamentos / outras variações no capital próprio',
            taxonomyCodes: [
                340,
                349,
                -350,
                351
            ],
            ifCreditOrDebit: [
                339,
                341,
                342,
                347,
                348,
                352
            ],
            value: 0,
        },
        {
            name: 'Resultado líquido do período',
            taxonomyCodes: [],
            ifCreditOrDebit: [
                646
            ],
            value: 0,
        },
        {
            name: 'Dividendos antecipados',
            taxonomyCodes: [
                -647
            ],
            value: 0,
        },
    ],
};

const profitLossTemplate = {
    revenue: [
        {
            name: 'Vendas e serviços prestados',
            taxonomyCodes: [
                506,
                507,
                508,
                509,
                -511,
                -512,
                513,
                514,
                515,
                516,
                -518
            ],
            ifCreditOrDebit: [
                510,
                517
            ],
        },
        {
            name: 'Subsídios à exploração',
            taxonomyCodes: [
                527,
                528
            ],
        },
        {
            name:
                'Ganhos / perdas imputadas de subsidiárias, associadas e empreendimentos conjuntos',
            taxonomyCodes: [
                614,
                615,
                616,
                638,
                639,
                -479,
                -480,
                -481,
                -482
            ],
        },
        {
            name: 'Variação nos inventários da produção',
            taxonomyCodes: [],
            ifCreditOrDebit: [
                519,
                520,
                521,
                522
            ],
        },
        {
            name: 'Trabalhos para a própria entidade',
            taxonomyCodes: [
                523,
                524,
                525,
                526
            ],
        },

        {
            name: 'Aumentos / reduções de justo valor',
            taxonomyCodes: [
                594,
                595,
                596,
                597,
                598,
                599,
                600,
                601,
                602,
                -454,
                -455,
                -456,
                -457,
                -458,
                -459,
                -460,
                -461,
                -462,
            ],
        },
        {
            name: 'Outros rendimentos',
            taxonomyCodes: [
                603,
                604,
                605,
                606,
                607,
                608,
                609,
                610,
                611,
                612,
                613,
                617,
                618,
                619,
                620,
                621,
                622,
                623,
                624,
                625,
                626,
                627,
                628,
                629,
                630,
                631,
                632,
                633,
                634,
                636,
                637,
                640,
                642,
            ],
        },
    ],
    expenses: [
        {
            name: 'Custo das mercadorias vendidas e das matérias consumidas',
            taxonomyCodes: [
                353,
                354,
                355
            ],
        },
        {
            name: 'Fornecimentos e serviços externos',
            taxonomyCodes: [
                356,
                357,
                358,
                359,
                360,
                361,
                362,
                363,
                364,
                365,
                366,
                367,
                368,
                369,
                370,
                371,
                372,
                373,
                374,
                375,
                376,
                377,
                378,
                379,
                380,
                381,
                382,
                383,
                384,
            ],
        },
        {
            name: 'Gastos com o pessoal',
            taxonomyCodes: [
                385,
                386,
                389,
                390,
                391,
                392,
                393
            ],
            ifCreditOrDebit: [
                387,
                388
            ],
        },
        {
            name: 'Imparidade / ajustamentos de inventários (perdas / reversões)',
            taxonomyCodes: [
                415,
                416,
                417,
                418,
                419,
                420,
                421,
                -549,
                -550,
                -551,
                -552,
                -553,
                -554,
                -555,
            ],
        },
        {
            name: 'Imparidade de dívidas a receber (perdas / reversões)',
            taxonomyCodes: [
                413,
                414,
                -547,
                -548
            ],
        },
        {
            name: 'Provisões (aumentos / reduções)',
            taxonomyCodes: [
                463,
                464,
                465,
                466,
                467,
                468,
                469,
                470,
                -586,
                -587,
                -588,
                -589,
                -590,
                -591,
                -592,
                -593,
            ],
        },
        {
            name:
                'Imparidade de investimentos não depreciáveis / amortizáveis (perdas / reversões)',
            taxonomyCodes: [
                422,
                423,
                424,
                425,
                441,
                442,
                443,
                444,
                445,
                446,
                447,
                448,
                449,
                450,
                451,
                452,
                453,
                -556,
                -557,
                -558,
                -573,
                -574,
                -575,
                -576,
                -577,
                -578,
                -579,
                -580,
                -581,
                -582,
                -583,
                -584,
                -585,
            ],
            ifCreditOrDebit: [
                412
            ],
        },
        {
            name: 'Outros gastos',
            taxonomyCodes: [
                471,
                472,
                473,
                474,
                475,
                476,
                477,
                478,
                483,
                484,
                485,
                486,
                487,
                488,
                489,
                490,
                491,
                492,
                493,
                494,
                495,
                496,
                497,
                498,
                499,
            ],
        },
    ],
    depreciation: [
        {
            name: 'Gastos / reversões de depreciação e de amortização',
            taxonomyCodes: [
                394,
                395,
                396,
                397,
                398,
                399,
                400,
                401,
                402,
                403,
                404,
                405,
                406,
                407,
                408,
                409,
                410,
                411,
                -529,
                -530,
                -531,
                -532,
                -533,
                -534,
                -535,
                -536,
                -537,
                -538,
                -539,
                -540,
                -541,
                -542,
                -543,
                -544,
                -545,
                -546,
            ],
        },
        {
            name:
                'Imparidade de investimentos depreciáveis / amortizáveis (perdas / reversões)',
            taxonomyCodes: [
                426,
                427,
                428,
                429,
                430,
                431,
                432,
                433,
                434,
                435,
                436,
                437,
                438,
                439,
                440,
                -559,
                -560,
                -561,
                -562,
                -563,
                -564,
                -565,
                -566,
                -567,
                -568,
                -569,
                -570,
                -571,
                -572,
            ],
        },
    ],
    interest: [
        {
            name: 'Juros e rendimentos similares obtidos',
            taxonomyCodes: [
                635,
                641
            ],
        },
        {
            name: 'Juros e gastos similares suportados',
            taxonomyCodes: [
                500,
                501,
                502,
                503,
                504,
                505
            ],
        },
    ],
    taxes: [
        {
            name: 'Imposto sobre o rendimento do período',
            taxonomyCodes: [
                644
            ],
            ifCreditOrDebit: [
                645
            ],
        },
    ],
    ebit: 0,
    ebitda: 0,
    netIncome: 0,
};

const processTransactionLines = (lines, accountId) => {
    const totalTransactionValues = {
        totalCredit: 0,
        totalDebit: 0,
    };
    if (lines.CreditLine) {
        if (Array.isArray(lines.CreditLine)) {
            lines.CreditLine.forEach(credit => {
                if (credit.AccountID.indexOf(accountId) === 0) {
                    totalTransactionValues.totalCredit += parseFloat(credit.CreditAmount);
                }
            });
        } else if (lines.CreditLine.AccountID.indexOf(accountId) === 0) {
            totalTransactionValues.totalCredit += parseFloat(
                lines.CreditLine.CreditAmount,
            );
        }
    }

    if (lines.DebitLine) {
        if (Array.isArray(lines.DebitLine)) {
            lines.DebitLine.forEach(debit => {
                if (debit.AccountID.indexOf(accountId) === 0) {
                    totalTransactionValues.totalDebit += parseFloat(debit.DebitAmount);
                }
            });
        } else if (lines.DebitLine.AccountID.indexOf(accountId) === 0) {
            totalTransactionValues.totalDebit += parseFloat(
                lines.DebitLine.DebitAmount,
            );
        }
    }
    return totalTransactionValues;
};

const processTransactions = (transactions, accountId, monthly) => {
    const totalJournalValues = {
        totalCredit: monthly ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 0,
        totalDebit: monthly ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 0,
    };

    let currentTransaction;
    if (Array.isArray(transactions)) {
        transactions.forEach(transaction => {
            if (transaction.Lines && transaction.TransactionType == 'N') {
                currentTransaction = processTransactionLines(
                    transaction.Lines,
                    accountId,
                );
                if (monthly) {
                    totalJournalValues.totalCredit[
                        Math.min(parseInt(transaction.Period), 12) - 1
                    ] =
                        totalJournalValues.totalCredit[
                        Math.min(parseInt(transaction.Period), 12) - 1
                        ] + currentTransaction.totalCredit;
                    totalJournalValues.totalDebit[
                        Math.min(parseInt(transaction.Period), 12) - 1
                    ] =
                        totalJournalValues.totalDebit[
                        Math.min(parseInt(transaction.Period), 12) - 1
                        ] + currentTransaction.totalDebit;
                } else {
                    totalJournalValues.totalCredit += currentTransaction.totalCredit;
                    totalJournalValues.totalDebit += currentTransaction.totalDebit;
                }
            }
        });
    } else if (transactions.Lines && transactions.Lines.TransactionType == 'N') {
        currentTransaction = processTransactionLines(transactions.Lines, accountId);
        if (monthly) {
            totalJournalValues.totalCredit[
                Math.min(parseInt(transactions.Period), 12) - 1
            ] =
                totalJournalValues.totalCredit[
                Math.min(parseInt(transactions.Period), 12) - 1
                ] + currentTransaction.totalCredit;
            totalJournalValues.totalDebit[
                Math.min(parseInt(transactions.Period), 12) - 1
            ] =
                totalJournalValues.totalDebit[
                Math.min(parseInt(transactions.Period), 12) - 1
                ] + currentTransaction.totalDebit;
        } else {
            totalJournalValues.totalCredit += currentTransaction.totalCredit;
            totalJournalValues.totalDebit += currentTransaction.totalDebit;
        }
    }

    return totalJournalValues;
};

const processJournalEntries = (entries, accountId, monthly) => {
    const totalLedgerValues = {
        totalCredit: monthly ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 0,
        totalDebit: monthly ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 0,
    };

    let currentJournal;
    if (Array.isArray(entries)) {
        entries.forEach(entry => {
            if (entry.Transaction) {
                currentJournal = processTransactions(
                    entry.Transaction,
                    accountId,
                    monthly,
                );
                totalLedgerValues.totalCredit = monthly
                    ? totalLedgerValues.totalCredit.map((ledger, index) => {
                        return currentJournal.totalCredit[index] + ledger;
                    })
                    : (totalLedgerValues.totalCredit += currentJournal.totalCredit);
                totalLedgerValues.totalDebit = monthly
                    ? totalLedgerValues.totalDebit.map((ledger, index) => {
                        return currentJournal.totalDebit[index] + ledger;
                    })
                    : (totalLedgerValues.totalDebit += currentJournal.totalDebit);
            }
        });
    } else if (entries.Transaction) {
        currentJournal = processTransactions(
            entries.Transaction,
            accountId,
            monthly,
        );
        totalLedgerValues.totalCredit = monthly
            ? totalLedgerValues.totalCredit.map((ledger, index) => {
                return currentJournal.totalCredit[index] + ledger;
            })
            : (totalLedgerValues.totalCredit += currentJournal.totalCredit);
        totalLedgerValues.totalDebit = monthly
            ? totalLedgerValues.totalDebit.map((ledger, index) => {
                return currentJournal.totalDebit[index] + ledger;
            })
            : (totalLedgerValues.totalDebit += currentJournal.totalDebit);
    }

    return totalLedgerValues;
};

const fetchAccount = (accounts, accountId) => {
    if (Array.isArray(accounts)) {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].AccountID == accountId) {
                return accounts[i];
            }
        }
    } else if (accounts.AccountID == accountId) {
        return accounts;
    }
    return null;
};

const processTaxonomySum = (taxonomy, accounts) => {
    // fetch the account ids for all accounts with this taxonomy code
    const results = [];
    let balance = 0;
    accounts.forEach(account => {
        if (account.TaxonomyCode == taxonomy) {
            balance =
                Number(account.ClosingDebitBalance) -
                Number(account.ClosingCreditBalance);
            results.push({
                taxonomy: taxonomy,
                account: account.AccountID,
                balanceType: balance > 0 ? 'debit' : 'credt',
                balanceValue: balance > 0 ? balance : -balance,
            });
        }
    });

    return results;
};

const processTaxonomySumViaTransactions = (taxonomy, accounts, journals) => {
    const accountCodes = [];
    const results = [];
    let currentAccount;
    let balance = 0;
    accounts.forEach(account => {
        if (account.TaxonomyCode == taxonomy) {
            accountCodes.push(account.AccountID);
        }
    });

    accountCodes.forEach(code => {
        // get transaction sum
        currentAccount = processJournalEntries(journals, code, false);
        balance =
            Number(currentAccount.totalDebit) - Number(currentAccount.totalCredit);
        results.push({
            taxonomy: taxonomy,
            account: code,
            balanceType: balance > 0 ? 'debit' : 'credt',
            balanceValue: balance > 0 ? balance : -balance,
        });
        // return the same we returned before
    });

    return results;
};

const processAccounts = (accounts, accountId) => {
    const totalBalance = {
        totalCredit: 0,
        totalDebit: 0,
    };

    if (Array.isArray(accounts)) {
        accounts.forEach(account => {
            if (account.AccountID == accountId) {
                totalBalance.totalDebit =
                    account.ClosingDebitBalance - account.OpeningDebitBalance;
                totalBalance.totalCredit =
                    account.ClosingCreditBalance - account.OpeningCreditBalance;
                const total = totalBalance.totalDebit - totalBalance.totalCredit;
                if (total > 0) {
                    totalBalance.totalDebit = Number(parseFloat(total).toFixed(2));
                    totalBalance.totalCredit = Number(0);
                } else {
                    totalBalance.totalDebit = Number(0);
                    totalBalance.totalCredit = Number(parseFloat(-total).toFixed(2));
                }
            }
        });
    } else {
        const accountObj = accounts;
        totalBalance.totalDebit =
            accountObj.ClosingDebitBalance - accountObj.OpeningDebitBalance;
        totalBalance.totalCredit =
            accountObj.ClosingCreditBalance - accountObj.OpeningCreditBalance;
        totalBalance.total = totalBalance.totalDebit - totalBalance.totalCredit;
        const total = totalBalance.totalDebit - totalBalance.totalCredit;
        if (total > 0) {
            totalBalance.totalDebit = parseFloat(total).toFixed(2);
            totalBalance.totalCredit = 0;
        } else {
            totalBalance.totalDebit = 0;
            totalBalance.totalCredit = parseFloat(-total).toFixed(2);
        }
    }

    return totalBalance;
};

const calculateEquity = accounts => {
    let sum = 0;
    let currentSum = 0;
    const equity = {
        accounts: [],
        total: 0,
    };
    balanceSheetTemplate.equity.forEach(equityAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        equityAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySum(Math.abs(taxonomy), accounts);
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit
        if (equityAccount.ifCreditBalance) {
            equityAccount.ifCreditBalance.forEach(credit => {
                currentTaxonomy = processTaxonomySum(Math.abs(credit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'credit') {
                        if (credit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if debit
        if (equityAccount.ifDebtBalance) {
            equityAccount.ifDebtBalance.forEach(debit => {
                currentTaxonomy = processTaxonomySum(Math.abs(debit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        if (debit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if credit or debit
        if (equityAccount.ifCreditOrDebit) {
            equityAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySum(Math.abs(creditOrDebit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }
        equity.accounts.push({ name: equityAccount.name, value: currentSum });
        sum += currentSum;
        currentSum = 0;
    });
    equity.total = sum;

    return equity;
};

const calculateAssets = accounts => {
    let totalCurrent = 0;
    let totalNonCurrent = 0;
    let currentSum = 0;
    const assets = {
        current: [],
        nonCurrent: [],
        totalCurrent: 0,
        totalNonCurrent: 0,
        total: 0,
    };
    balanceSheetTemplate.assets.current.forEach(assetAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        assetAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySum(Math.abs(taxonomy), accounts);
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit
        if (assetAccount.ifCreditBalance) {
            assetAccount.ifCreditBalance.forEach(credit => {
                currentTaxonomy = processTaxonomySum(Math.abs(credit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'credit') {
                        if (credit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if debit
        if (assetAccount.ifDebtBalance) {
            assetAccount.ifDebtBalance.forEach(debit => {
                currentTaxonomy = processTaxonomySum(Math.abs(debit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        if (debit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if credit or debit
        if (assetAccount.ifCreditOrDebit) {
            assetAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySum(Math.abs(creditOrDebit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }
        assets.current.push({ name: assetAccount.name, value: currentSum });
        totalCurrent += currentSum;
        currentSum = 0;
    });

    balanceSheetTemplate.assets.nonCurrent.forEach(assetAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        assetAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySum(Math.abs(taxonomy), accounts);
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit
        if (assetAccount.ifCreditBalance) {
            assetAccount.ifCreditBalance.forEach(credit => {
                currentTaxonomy = processTaxonomySum(Math.abs(credit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'credit') {
                        if (credit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if debit
        if (assetAccount.ifDebtBalance) {
            assetAccount.ifDebtBalance.forEach(debit => {
                currentTaxonomy = processTaxonomySum(Math.abs(debit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        if (debit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if credit or debit
        if (assetAccount.ifCreditOrDebit) {
            assetAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySum(Math.abs(creditOrDebit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }
        assets.nonCurrent.push({ name: assetAccount.name, value: currentSum });
        totalNonCurrent += currentSum;
        currentSum = 0;
    });

    assets.totalCurrent = totalCurrent;
    assets.totalNonCurrent = totalNonCurrent;
    assets.total = totalCurrent + totalNonCurrent;

    return assets;
};

const calculateLiabilities = accounts => {
    let totalCurrent = 0;
    let totalNonCurrent = 0;
    let currentSum = 0;
    const liabilities = {
        current: [],
        nonCurrent: [],
        totalCurrent: 0,
        totalNonCurrent: 0,
        total: 0,
    };
    balanceSheetTemplate.liabilities.current.forEach(liabilityAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        liabilityAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySum(Math.abs(taxonomy), accounts);
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit
        if (liabilityAccount.ifCreditBalance) {
            liabilityAccount.ifCreditBalance.forEach(credit => {
                currentTaxonomy = processTaxonomySum(Math.abs(credit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'credit') {
                        if (credit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if debit
        if (liabilityAccount.ifDebtBalance) {
            liabilityAccount.ifDebtBalance.forEach(debit => {
                currentTaxonomy = processTaxonomySum(Math.abs(debit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        if (debit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if credit or debit
        if (liabilityAccount.ifCreditOrDebit) {
            liabilityAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySum(Math.abs(creditOrDebit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }
        liabilities.current.push({
            name: liabilityAccount.name,
            value: currentSum,
        });
        totalCurrent += currentSum;
        currentSum = 0;
    });

    balanceSheetTemplate.liabilities.nonCurrent.forEach(liabilityAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        liabilityAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySum(Math.abs(taxonomy), accounts);
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit
        if (liabilityAccount.ifCreditBalance) {
            liabilityAccount.ifCreditBalance.forEach(credit => {
                currentTaxonomy = processTaxonomySum(Math.abs(credit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'credit') {
                        if (credit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if debit
        if (liabilityAccount.ifDebtBalance) {
            liabilityAccount.ifDebtBalance.forEach(debit => {
                currentTaxonomy = processTaxonomySum(Math.abs(debit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        if (debit < 0) {
                            currentSum -= tax.balanceValue;
                        } else {
                            currentSum += tax.balanceValue;
                        }
                    }
                });
            });
        }

        // check if credit or debit
        if (liabilityAccount.ifCreditOrDebit) {
            liabilityAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySum(Math.abs(creditOrDebit), accounts);
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }
        liabilities.nonCurrent.push({
            name: liabilityAccount.name,
            value: currentSum,
        });
        totalNonCurrent += currentSum;
        currentSum = 0;
    });

    liabilities.totalCurrent = totalCurrent;
    liabilities.totalNonCurrent = totalNonCurrent;
    liabilities.total = totalCurrent + totalNonCurrent;

    return liabilities;
};

const calculateBalanceSheet = accounts => {
    const balanceSheetResponse = {};
    balanceSheetResponse.assets = calculateAssets(accounts);
    balanceSheetResponse.liabilities = calculateLiabilities(accounts);
    balanceSheetResponse.equity = calculateEquity(accounts);
    return balanceSheetResponse;
};

const calculateCash = accounts => {
    const cashCalculations = ['11', '12', '13'];
    let total = 0;
    let currentAccount;
    /*
    cashCalculations.forEach(account => {
      currentAccount = fetchAccount(accounts, Math.abs(account));
      if (currentAccount) {
        if (account < 0) {
          total -=
            currentAccount.ClosingDebitBalance -
            currentAccount.ClosingCreditBalance;
        } else {
          total +=
            currentAccount.ClosingDebitBalance -
            currentAccount.ClosingCreditBalance;
        }
      }
    });
    */
    cashCalculations.forEach(account => {
        currentAccount = processJournalEntries(accounts, account, false);
        if (currentAccount) {
            if (account < 0) {
                total -= currentAccount.totalDebit - currentAccount.totalCredit;
            } else {
                total += currentAccount.totalDebit - currentAccount.totalCredit;
            }
        }
    });
    return total;
};

const calculateProfitLoss = (journals, accounts) => {
    let currentSum = 0;
    const pl = {
        revenue: [],
        expenses: [],
        interest: [],
        depreciation: [],
        taxes: [],
        ebitda: 0,
        ebit: 0,
        netIncome: 0,
    };

    profitLossTemplate.revenue.forEach(revenueAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        revenueAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySumViaTransactions(
                Math.abs(taxonomy),
                accounts,
                journals,
            );
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit or debit
        if (revenueAccount.ifCreditOrDebit) {
            revenueAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySumViaTransactions(
                    Math.abs(creditOrDebit),
                    accounts,
                    journals,
                );
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }

        pl.revenue.push({ name: revenueAccount.name, value: currentSum });
        currentSum = 0;
    });

    profitLossTemplate.expenses.forEach(expensesAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        expensesAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySumViaTransactions(
                Math.abs(taxonomy),
                accounts,
                journals,
            );
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit or debit
        if (expensesAccount.ifCreditOrDebit) {
            expensesAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySumViaTransactions(
                    Math.abs(creditOrDebit),
                    accounts,
                    journals,
                );
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }

        pl.expenses.push({ name: expensesAccount.name, value: currentSum });
        currentSum = 0;
    });

    profitLossTemplate.interest.forEach(interestAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        interestAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySumViaTransactions(
                Math.abs(taxonomy),
                accounts,
                journals,
            );
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit or debit
        if (interestAccount.ifCreditOrDebit) {
            interestAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySumViaTransactions(
                    Math.abs(creditOrDebit),
                    accounts,
                    journals,
                );
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }

        pl.interest.push({ name: interestAccount.name, value: currentSum });
        currentSum = 0;
    });

    profitLossTemplate.depreciation.forEach(depreciationAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        depreciationAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySumViaTransactions(
                Math.abs(taxonomy),
                accounts,
                journals,
            );
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit or debit
        if (depreciationAccount.ifCreditOrDebit) {
            depreciationAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySumViaTransactions(
                    Math.abs(creditOrDebit),
                    accounts,
                    journals,
                );
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }

        pl.depreciation.push({ name: depreciationAccount.name, value: currentSum });
        currentSum = 0;
    });

    profitLossTemplate.taxes.forEach(taxesAccount => {
        // check taxonomy codes
        let currentTaxonomy;
        taxesAccount.taxonomyCodes.forEach(taxonomy => {
            currentTaxonomy = processTaxonomySumViaTransactions(
                Math.abs(taxonomy),
                accounts,
                journals,
            );
            currentTaxonomy.forEach(tax => {
                if (taxonomy < 0) {
                    currentSum -= tax.balanceValue;
                } else {
                    currentSum += tax.balanceValue;
                }
            });
        });

        // check if credit or debit
        if (taxesAccount.ifCreditOrDebit) {
            taxesAccount.ifCreditOrDebit.forEach(creditOrDebit => {
                currentTaxonomy = processTaxonomySumViaTransactions(
                    Math.abs(creditOrDebit),
                    accounts,
                    journals,
                );
                currentTaxonomy.forEach(tax => {
                    if (tax.balanceType === 'debit') {
                        currentSum -= tax.balanceValue;
                    } else {
                        currentSum += tax.balanceValue;
                    }
                });
            });
        }

        pl.taxes.push({ name: taxesAccount.name, value: currentSum });
        currentSum = 0;
    });

    pl.ebitda =
        pl.revenue.reduce((acc, curr) => acc + curr.value, 0) -
        pl.expenses.reduce((acc, curr) => acc + curr.value, 0);
    pl.ebit =
        pl.ebitda - pl.depreciation.reduce((acc, curr) => acc + curr.value, 0);
    let incomeInterest = 0;
    let expensesInterest = 0;
    for (let i = 0; i < pl.interest.length; i++) {
        if (pl.interest[i].name === 'Juros e rendimentos similares obtidos') {
            incomeInterest = pl.interest[i].value;
        } else if (pl.interest[i].name === 'Juros e gastos similares suportados') {
            expensesInterest = pl.interest[i].value;
        }
    }
    pl.netIncome =
        pl.ebit +
        incomeInterest -
        expensesInterest -
        pl.taxes.reduce((acc, curr) => acc + curr.value, 0);

    console.log(pl);
    return pl;
};

const calculateGrossProfitMargin = journal => {
    const revenueFromSales = processJournalEntries(journal, '71', false); // TODO year
    const cogs = processJournalEntries(journal, '61', false);
    return (
        (revenueFromSales.totalCredit -
            revenueFromSales.totalDebit -
            (cogs.totalDebit - cogs.totalCredit)) /
        (revenueFromSales.totalCredit - revenueFromSales.totalDebit)
    );
};

module.exports = (server, db) => {
    /**
     * @param accountId
     * @param year (required)
     * @param monthly (required) if true, returns the total credit and debit values
     * for the year; otherwise, it returns an array for the credit and debit values
     * for each month
     */
    server.get('/api/financial/account-balance', (req, res) => {
        const journalEntries = db.GeneralLedgerEntries.Journal;

        if (!req.query.monthly || !req.query.accountId) {
            res.json({
                error:
                    'The request should be as follows: /api/financial/accountBalance?accountId=<accountId>&monthly=<true|false>',
            });
            return;
        }

        const totalJournalValues = processJournalEntries(
            journalEntries,
            req.query.accountId,
            req.query.monthly === 'true',
        );

        res.json(totalJournalValues);
    });

    /**
     * @param accountId
     * NEED TO ADD THE YEAR PARAMETER
     */
    server.get('/api/financial/account-balance-sheet', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const balance = processAccounts(accounts, req.query.accountId);
        res.json(balance);
    });

    server.get('/api/financial/accounts', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;

        if (!req.query.accountId) {
            res.json({
                error:
                    'The request should be as follows: /api/financial/accountBalance?accountId=<accountId>',
            });
            return;
        }

        let accountValues = fetchAccount(accounts, req.query.accountId);
        if (!accountValues) {
            accountValues = { error: 'No account was found for the specified ID' };
        } else {
            accountValues.OpeningCreditBalance = parseFloat(
                accountValues.OpeningCreditBalance,
            );
            accountValues.OpeningDebitBalance = parseFloat(
                accountValues.OpeningDebitBalance,
            );
            accountValues.ClosingCreditBalance = parseFloat(
                accountValues.ClosingCreditBalance,
            );
            accountValues.ClosingDebitBalance = parseFloat(
                accountValues.ClosingDebitBalance,
            );
        }

        res.json(accountValues);
    });

    server.get('/api/financial/ebitda', (req, res) => {
        const journals = db.GeneralLedgerEntries.Journal;
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateProfitLoss(journals, accounts).ebitda);
    });

    server.get('/api/financial/ebit', (req, res) => {
        const journals = db.GeneralLedgerEntries.Journal;
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateProfitLoss(journals, accounts).ebit);
    });

    server.get('/api/financial/earnings', (req, res) => {
        const journals = db.GeneralLedgerEntries.Journal;
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateProfitLoss(journals, accounts).netIncome);
    });

    server.get('/api/financial/accounts-receivable', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const assets = calculateAssets(accounts);
        let i = 0;
        for (i; i < assets.current.length; i++) {
            if (assets.current[i].name === 'Clientes') {
                break;
            }
        }
        console.log(`accounts receivable: ${assets.current[i].value}`);
        console.log(assets);
        res.json(assets.current[i].value.toFixed(2));
    });

    server.get('/api/financial/equity', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const equity = calculateEquity(accounts);
        res.json(parseFloat(equity.total));
    });

    server.get('/api/financial/assets', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const assets = calculateAssets(accounts);
        res.json(parseFloat(assets.total));
    });

    server.get('/api/financial/liabilities', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const liabilities = calculateLiabilities(accounts);
        res.json(parseFloat(liabilities.total));
    });

    server.get('/api/financial/balance-sheet', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const balanceSheetResponse = calculateBalanceSheet(accounts);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(balanceSheetResponse);
    });

    server.get('/api/financial/liabilities/current', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateLiabilities(accounts).totalCurrent);
    });

    server.get('/api/financial/assets/current', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateAssets(accounts).totalCurrent);
    });

    server.get('/api/financial/assets/cash', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        res.json(calculateCash(accounts));
    });

    server.get('/api/financial/ratios/cash', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const assets = calculateAssets(accounts);
        let i = 0;
        for (i; i < assets.current.length; i++) {
            if (assets.current[i].name == 'Caixa e depósitos bancários') {
                break;
            }
        }
        const currentLiabilities = calculateLiabilities(accounts).totalCurrent;
        res.json((assets.current[i].value / currentLiabilities).toFixed(2));
    });

    server.get('/api/financial/ratios/current', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const currentAssets = calculateAssets(accounts).totalCurrent;
        const currentLiabilities = calculateLiabilities(accounts).totalCurrent;
        console.log(currentAssets);
        console.log(currentLiabilities);
        res.json((currentAssets / currentLiabilities).toFixed(2));
    });

    server.get('/api/financial/working-capital', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const currentAssets = calculateAssets(accounts).totalCurrent;
        const currentLiabilities = calculateLiabilities(accounts).totalCurrent;
        res.json((currentAssets - currentLiabilities).toFixed(2));
    });

    server.get('/api/financial/gross-profit-margin', (req, res) => {
        const journal = db.GeneralLedgerEntries.Journal;
        const grossProfit = calculateGrossProfitMargin(journal);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(grossProfit);
    });

    server.get('/api/financial/profit-loss', (req, res) => {
        const accounts = db.GeneralLedgerAccounts.Account;
        const journal = db.GeneralLedgerEntries.Journal;
        const pl = calculateProfitLoss(journal, accounts);
        res.json(pl);
    });
};