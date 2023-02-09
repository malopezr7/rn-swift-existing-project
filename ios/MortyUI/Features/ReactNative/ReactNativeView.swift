//
//  ReactNativeView.swift
//  MortyUI
//
//  Created by Manuel Lopez on 9/2/23.
//

import SwiftUI

struct ReactNativeView: View {
    @StateObject private var data = CharacterListViewModel()

    var body: some View {
        NavigationView {
            VStack{
                let character = data.characters?[0] ?? nil;
                
                if character == nil {
                        Text("loading...")
                }
                else {
                    ReactNativeViewRepresentable(initialProperties: ["data" : "{\"id\": \"\(character?.id ?? "")\", \"name\":\"\(character?.name ?? "")\", \"image\":\"\(character?.image ?? "")\"}"])
                }
            }
            .navigationTitle("RNView")
            .onAppear {
                data.fetchCharacters()
            }
        }
    }
}

struct ReactNativeView_Previews: PreviewProvider {
    static var previews: some View {
        ReactNativeView()
    }
}
