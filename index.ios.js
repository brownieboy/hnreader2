import React from "react-native";

const {
    AppRegistry,
    StyleSheet,
    Navigator
} = React;


import NewsItems from "./src/components/news-items";
import WebPage from "./src/components/webpage";

const ROUTES = {
    news_items: NewsItems,
    web_page: WebPage
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

var hnreader2 = React.createClass({

    renderScene: function(route, navigator) {

        const Component = ROUTES[route.name];
        return (
            <Component route={route} navigator={navigator} url={route.url} />
        );
    },

    render: function() {
        return (
            <Navigator
        style={styles.container}
        initialRoute={{name: "news_items", url: ""}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
        );

    }


});



AppRegistry.registerComponent("hnreader2", () => hnreader2);
