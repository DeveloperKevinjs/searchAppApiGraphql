import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { Countries, CountriesResponse } from '../../interfaces/countrie.interface';

const QUERY= gql`
  {
    countries {
     code
      name
    }
  }
`

// const QUERYv2 = gql`
//   query GetCountry($name: String!) {
//     countries(filter: { code: { eq: $name } }) {
//       code
//       name
//     }
//   }
// `;

@Injectable({
  providedIn: 'root'
})
export class ApiGraphqlService {

  constructor(
    private apollo:Apollo
  ) { }

  public getAllCountries():Observable<Countries[]>{
    return this.apollo.watchQuery<CountriesResponse>({
      query: QUERY
    }).valueChanges.pipe(
      map((res)=>res.data.countries)
    );
  }
}
