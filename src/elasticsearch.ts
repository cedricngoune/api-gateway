import { winstonLogger } from '@cedricngoune/shared';
import { config } from './config';
import { Logger } from 'winston';
import { Client } from '@elastic/elasticsearch';
import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'apitGatewayElasticConection', 'debug');

class ElasticSearch {
  private elasticSearchClient: Client;

  constructor() {
    this.elasticSearchClient = new Client({
      node: `${config.ELASTIC_SEARCH_URL}`
    });
  }
  public async checkConnection(): Promise<void> {
    let isConnected = false;
    while (!isConnected) {
      log.info('GatewayService connecting to ElasticSearch');
      try {
        const health: ClusterHealthResponse = await this.elasticSearchClient.cluster.health({});
        log.info(`GatewayService ElasticSearch health status - ${health.status}`);
        isConnected = true;
      } catch (error) {
        log.error('Connection to Elasticsearc failed, retrying...');
        log.log('error', 'GatewayService checkOnConnection() method error:', error);
      }
    }
  }
}
export const elasticSearch = new ElasticSearch();
