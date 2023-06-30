<!-- <template>
    <div>
      <button @click="fetchData">API 호출</button>
      <table>
        <tr>
            <th>순위</th>
            <th>종목</th>
            <th>기호</th>
            <th>가격(KRW)</th>
            <th>총 시가</th>
            <th>거래량</th>
            <th>변동(24H)</th>
            <th>변동(7D)</th>
        </tr>

        <tr v-for="item in data" :key="item.id">
            <th>{{ item.rank }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.symbol }}</th>
            <th>₩{{ Number(item.quotes.KRW.price.toFixed(1)).toLocaleString() }}</th>
            <th>{{ (item.quotes.KRW.market_cap / 1000000000000).toFixed(2) }}T</th>
            <th>{{ (item.quotes.KRW.volume_24h / 1000000000000).toFixed(2) }}</th>
            <th>{{ item.quotes.KRW.percent_change_24h.toFixed(2) }}%</th>
            <th>{{ item.quotes.KRW.percent_change_7d.toFixed(2) }}%</th>
        </tr>
      </table>
    </div>
  </template> -->

  <template>
    <table>
        <tr>
            <th>순위</th>
            <th>종목명</th>
            <th>기호</th>
            <th>가격(KRW)</th>
            <th>총 시가</th>
            <th>거래량</th>
            <th>변동(24H)</th>
            <th>변동(7D)</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
            <th>{{ item.rank }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.symbol }}</th>
            <th>₩{{ Number(item.quotes.KRW.price.toFixed(1)).toLocaleString() }}</th>
            <th>{{ (item.quotes.KRW.market_cap / 1000000000000).toFixed(2) }}T</th>
            <th>{{ (item.quotes.KRW.volume_24h / 1000000000000).toFixed(2) }}</th>
            <th>{{ item.quotes.KRW.percent_change_24h.toFixed(2) }}%</th>
            <th>{{ item.quotes.KRW.percent_change_7d.toFixed(2) }}%</th>
        </tr>
        <!-- 다른 순위에 해당하는 행들도 추가 -->
    </table>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW'); // API 엔드포인트에 맞게 URL을 변경하세요
          this.data = response.data.slice(0,100);
          console.log(this.data)
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>

<style scoped>
  table {
      margin: auto;
      width: 80%;
      border-collapse: collapse;
      background-color: #333;
  }
  th, td {
      padding: 10px;
      text-align: center;
      width: 10%;
      border: 1px solid white;
  }
  th {
      background-color: #444;
      font-weight: bold;
  }
  tr:nth-child(even) {
      background-color: #333;
  }
  tr:hover {
      background-color: #555;
  }
</style>