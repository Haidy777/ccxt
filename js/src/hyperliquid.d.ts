import Exchange from './abstract/hyperliquid.js';
import type { Market, TransferEntry, Balances, Int, OrderBook, OHLCV, Str, FundingRateHistory, Order, OrderType, OrderSide, Trade, Strings, Position, OrderRequest, Dict, Num } from './base/types.js';
/**
 * @class hyperliquid
 * @augments Exchange
 */
export default class hyperliquid extends Exchange {
    describe(): any;
    setSandboxMode(enabled: any): void;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<import("./base/types.js").MarketInterface[]>;
    parseMarket(market: any): Market;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    amountToPrecision(symbol: any, amount: any): any;
    priceToPrecision(symbol: string, price: any): string;
    hashMessage(message: any): string;
    signHash(hash: any, privateKey: any): {
        r: string;
        s: string;
        v: any;
    };
    signMessage(message: any, privateKey: any): {
        r: string;
        s: string;
        v: any;
    };
    constructPhantomAgent(hash: any, isTestnet?: boolean): {
        source: string;
        connectionId: any;
    };
    actionHash(action: any, vaultAddress: any, nonce: any): any;
    signL1Action(action: any, nonce: any, vaultAdress?: any): object;
    buildSig(chainId: any, messageTypes: any, message: any): {
        r: string;
        s: string;
        v: any;
    };
    buildTransferSig(message: any): {
        r: string;
        s: string;
        v: any;
    };
    buildWithdrawSig(message: any): {
        r: string;
        s: string;
        v: any;
    };
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelOrders(ids: string[], symbol?: Str, params?: {}): Promise<any>;
    editOrder(id: string, symbol: string, type: string, side: string, amount?: Num, price?: Num, params?: {}): Promise<Order>;
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    parseOrder(order: any, market?: Market): Order;
    parseOrderStatus(status: any): string;
    parseOrderType(status: any): string;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: any, market?: Market): Trade;
    fetchPosition(symbol: string, params?: {}): Promise<Position>;
    fetchPositions(symbols?: Strings, params?: {}): Promise<Position[]>;
    parsePosition(position: any, market?: Market): Position;
    setMarginMode(marginMode: string, symbol?: Str, params?: {}): Promise<any>;
    setLeverage(leverage: Int, symbol?: Str, params?: {}): Promise<any>;
    addMargin(symbol: string, amount: any, params?: {}): Promise<any>;
    reduceMargin(symbol: string, amount: any, params?: {}): Promise<any>;
    modifyMarginHelper(symbol: string, amount: any, type: any, params?: {}): Promise<any>;
    transfer(code: string, amount: number, fromAccount: string, toAccount: string, params?: {}): Promise<TransferEntry>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<any>;
    handlePublicAddress(methodName: string, params: Dict): any[];
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
