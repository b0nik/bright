import React, {Component} from 'react';

export default class Footer extends Component {

    render() {
        require('./footer.less');
        return (
            <div className="footer clearfix">
                <div className="footer-column">
                    <h4 className="column-title">Find Something</h4>

                    <div className="column-text-search">
                        <p className="paragraf-search">Curabitur et ligula. Ut molestie a, ultricies porta urna.
                            Vestibulum commodo volutpat a,
                            convallis ac, laoreet enim.</p>
                    </div>
                    <form className="search clearfix">
                        <input className="search__txt" type="text" name="search-text"
                               placeholder="Looking for something?"/>
                        <input className="search__btn" type="submit" value="GO"/>
                    </form>
                </div>
                <div className="footer-column">
                    <div className="column-title">Information</div>

                    <div className="column-text-information">
                        <p className="paragraf-information">Maecenas malesuada elit lectus felis, malesuada ultricies.
                            Curabitur et ligula. Ut molestie a,
                            ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.</p>

                        <p className="paragraf-information">Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla
                            imperdiet sit amet magna. Vestibulum
                            dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum
                            adipiscing
                            wisi.
                            Aliquam erat ac ipsum.</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="column-title">Search by</div>

                    <div className="column-text-information">
                    </div>
                </div>
            </div>
        )
    }
}