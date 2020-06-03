import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import gql from 'graphql-tag';
import {Lives,Query} from './types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public environmentUrl;
  lives:Observable<Lives[]>
  private querySubscription: Subscription;
  public liveDetails
  public celerityData
  public fanDetails
  public createFan
  public categoryList
  public followCelebrity

  constructor(
    private http: HttpClient,
    private apollo:Apollo) {
    // this.environmentUrl = environment.apiUrl;
  }

  returnConfigFile() {
    return this.http.get('./assets/config.json');
  }

  returnEnvironmentUrl() {
    return this.environmentUrl;
  }
  graphqlQueryForLives():Observable<Object>{
    var d = new Date();
    var n = d.toISOString();
    return  new Observable( observer => this.apollo.watchQuery<Query>({
      query:gql `{
        lives(where: {date: {EQ:"2020-12-26T10:27:13.000+0000" }}) {
          edges {
            node {
              id
              date
              thumbnailUrl
              celebrity {
                id
                firstName
                lastName
                description
              }
              description
              url
            }
          }
        }
      }`,
      variables:{
          category: "intangible"
        },

    })
    .valueChanges.subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.liveDetails=data
      observer.next(this.liveDetails)
    })
    )

  }
  graphqlQueryForCelebrity(celebrityDetails):Observable<Object>{
    //onclick query
    return  new Observable( observer => this.apollo.watchQuery<Query>({
      query:gql `query searchCelebrity(
        $last_name: String
        $first_name: String
        $description: String
      ) {
        celebrities(
          where: {
            OR: [
              { lastName: { LIKE: $last_name } }
              { firstName: { LIKE: $first_name } }
              { description: { LIKE: $description } }
            ]
          }
        ) {
          edges {
            node {
              id
              firstName
              lastName
              fanCount
              description
              videos {
                id
                url
              }
              photos {
                id
                url
              }
            }
          }
        }
      }`,

      variables:{
        "first_name":celebrityDetails['firstName'],
        "last_name":celebrityDetails['lastName'],
        "description":celebrityDetails['description']
      },
    })
    .valueChanges.subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.celerityData=data
      observer.next(this.celerityData)
      
    })
    )

  }
  graphqlQueryForFanId(obj):Observable<Object>{
    console.log(obj)
    return  new Observable( observer => this.apollo.watchQuery<Query>({
      query:gql `query  getFanId(
        $firstName: String
        $lastName: String
        $email: String
      
      ) {
        fans( where : { firstName : {EQ:$firstName} lastName : {EQ:$lastName}  email : {EQ :$email}} ) {
          edges{
            node{
              id
            }
          }
        }
        
      }`,

      variables:{
        "firstName":obj['firstName'],
        "lastName":obj['lastName'],
        "email":obj['email']
      },
    })
    .valueChanges.subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.fanDetails=data
      observer.next(this.fanDetails)
    })
    )

    

  }
  graphqlQueryForCreateFan(obj):Observable<Object>{
    console.log(obj)
    return  new Observable( observer => this.apollo.mutate({
      mutation:gql `mutation createFan(
        $firstName: String
        $lastName: String
        $notifyMe: Boolean!
        $email: String
        $phone: String
      
      ) {
        createFan(
          input: {
            firstName: $firstName
            lastName: $lastName
            notifyMe: $notifyMe
            email: $email
            phone: $phone
            
          }
        ) {
          id
        }
      }`,

      variables:{
        "firstName":obj['firstName'],
        "lastName":obj['lastName'],
        "email":obj['email'],
        "notifyMe":true,
        "phone":obj['phone']
      
      },
    })
   .subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.createFan=data
      observer.next(this.createFan)
    })
    )

  }
  graphqlQueryForListOfCategories():Observable<Object>{
    // console.log(obj)
    return  new Observable( observer => this.apollo.watchQuery<Query>({
      query:gql `query {
        categories{
          edges{
            node{
              name
              id
            }
          }
        }
      }`
    })
    .valueChanges.subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.categoryList=data
      observer.next(this.categoryList)
    })
    )


  }
  graphqlQueryForFollowCelerity(obj):Observable<Object>{
    console.log(obj)
    return  new Observable( observer => this.apollo.mutate({
      mutation:gql `mutation followCelebrity($fanId: String!, $celebrityId: String!) {
        followCelebrity(input: { fanId: $fanId, celebrityId: $celebrityId }) {
          result
        }
      }`,
      variables:{
        "fanId":obj['fanId'],
        "celebrityId":obj['celebrityId'],

      },
    })
   .subscribe(({data}) => {
      // this.currentUser = data.currentUser;
      console.log(data)
      this.followCelebrity=data
      observer.next(this.followCelebrity)
    })
    )

  }
}
